import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseMember } from '../../../@types/api/member';
import useGet from '../../../hooks/useGet';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { BoxShadows } from '../../../styles/shadows';
import { getMember } from '../../../api/member';
import useChangePage from '../../../hooks/useChangePage';
import PageButton from '../../Element/Shared/PageButton';
import { Sizes } from '../../../styles/sizes';
import { getDownloadLinkFromS3 } from '../../../s3/index';
import { S3Folders } from '../../../constants/s3';
import { Assets } from '../../../constants/assets';
import stringToJson from '../../../utils/stringToJson';
import { MemberBoxElementProps } from '../../../@types/adds';
import { Devices } from '../../../styles/devices';

export default function MemberPage() {
	const [members, setMembers] = useState<ResponseMember.Get>();
	const { page, onChangePage } = useChangePage();

	useEffect(() => {
		useGet(() => getMember({ page }), setMembers);
	}, [page]);

	return (
		<S.MemberPageLayout>
			{members &&
				members.items.map((member, i) => (
					<MemberBoxElement
						name={member.name}
						email={member.email}
						homepage={member.homepage}
						phoneNumber={member.phoneNumber}
						introBody={member.introBody}
						jobTitle={member.jobTitle}
						img={member.img}
						responsibility={member.responsibility}
						key={i}
					/>
				))}
			<div>
				<PageButton
					currentPage={page}
					totalPosts={members?.total}
					size={members?.size}
					onChangePage={onChangePage}
				/>
			</div>
		</S.MemberPageLayout>
	);
}

function MemberBoxElement({
	name,
	email,
	homepage,
	phoneNumber,
	jobTitle,
	introBody,
	img,
	responsibility,
}: MemberBoxElementProps) {
	let imgSrc: string = Assets.placeholderImgSrc;
	const parsedImg: FileDataType = stringToJson(img)?.[0];
	if (parsedImg) imgSrc = getDownloadLinkFromS3(S3Folders.member, parsedImg.key);
	return (
		<S.MemberBox>
			<div>
				<img src={imgSrc} />
			</div>
			<div>
				<p>{responsibility}</p>
				<h2>{name}</h2>
				<div>
					<S.Contact>
						<h4>E-mail</h4>
						<p>{email}</p>
					</S.Contact>
					<S.Contact>
						<h4>Telephone</h4>
						<p>{phoneNumber}</p>
					</S.Contact>
					<S.Contact>
						<h4>Homepage</h4>
						<p>
							<a href={homepage} target='_blank'>
								{homepage}
							</a>
						</p>
					</S.Contact>
				</div>
			</div>
			<div>
				<p>{jobTitle}</p>
				<p>{introBody}</p>
			</div>
		</S.MemberBox>
	);
}

namespace S {
	export const MemberPageLayout = styled.div`
		display: flex;
		flex-direction: column;
		gap: 3rem;

		> div:last-of-type {
			margin-top: calc(${Sizes.desktopPageButtonMarginTop} - 3rem);
		}
	`;

	export const MemberBox = styled.div`
		display: grid;
		grid-template-columns: 27rem 1fr;
		box-shadow: ${BoxShadows.smooth};
		overflow: hidden;

		@media ${Devices.mobile} {
			grid-template-columns: 1fr;
		}

		/* 사진 */
		> div:first-of-type {
			grid-row: 1/3;
			background-color: lightgray;
			height: 36rem;

			> img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			@media ${Devices.mobile} {
				width: 70vw;
				height: 93vw;
				margin: 0 auto;
				margin-top: 3.4rem;
			}
		}

		/* 프로필 */
		> div:nth-of-type(2) {
			background-color: ${Colors.white};
			padding: 3.4rem;

			> p {
				${Fonts.regular16}
				margin-bottom: 1rem;
				padding-top: 0.5rem;
			}

			> h2 {
				${Fonts.bold28}
				margin-bottom: 2rem;
			}

			> div {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 2rem;
				column-gap: 4rem;
				padding-bottom: 0.5rem;
				overflow: hidden;
			}

			@media ${Devices.mobile} {
				text-align: center;
				padding: 2rem;

				> p {
					padding-top: 0;
				}

				> div {
					display: flex;
					flex-direction: column;
					gap: 1.5rem;
				}
			}
		}

		/* 소개 */
		> div:last-of-type {
			background-color: ${Colors.blue100};
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0.8rem;
			padding: 2.3rem 3.4rem;

			> p {
				${Fonts.regular16}
				line-height: 120%;
			}

			@media ${Devices.mobile} {
				padding: 1.5rem;
				gap: 0.5rem;

				> p {
					${Fonts.regular14}
				}
			}
		}
	`;

	export const Contact = styled.div`
		> h4 {
			${Fonts.regular12}
			border-bottom: 0.1rem dashed ${Colors.blue100};
			padding: 0.6rem 0;
			margin-bottom: 0.5rem;
			color: ${Colors.gray200};
		}

		> p {
			${Fonts.regular14}
			white-space: nowrap;
		}

		/* Homepage */
		&:last-of-type {
			grid-column: 1/3;
		}
	`;
}
