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
import { svgMemberEmail, svgMemberTelephone, svgMemberHomepage } from '../../../styles/svgs';
import useRoute from '../../../hooks/useRoute';
import breakLineByAt from '../../../utils/breakLineByAt';

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
	const { onRouteToPath } = useRoute(`http://${homepage}`);
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
						<div>{svgMemberTelephone}</div>
						<p>{phoneNumber}</p>
					</S.Contact>
					<S.Contact>
						<div>{svgMemberEmail}</div>
						<p>{breakLineByAt(email)}</p>
					</S.Contact>
				</div>
				<S.Homepage onClick={onRouteToPath}>{svgMemberHomepage}</S.Homepage>
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
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;

		> div:first-of-type {
			grid-column: 1/3;
		}

		> div:last-of-type {
			margin-top: calc(${Sizes.desktopPageButtonMarginTop} - 3rem);
			grid-column: 1/3;
		}
	`;

	export const MemberBox = styled.div`
		display: grid;
		grid-template-columns: 24rem 1fr;
		grid-template-rows: 26.5rem 1fr;
		box-shadow: ${BoxShadows.smooth};
		overflow: hidden;

		@media ${Devices.mobile} {
			grid-template-columns: 1fr;
		}

		/* 사진 */
		> div:first-of-type {
			grid-row: 1/2;
			background-color: lightgray;

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
			padding: 2rem;
			padding-top: 6.5rem;
			position: relative;

			> p {
				${Fonts.regular18}
				margin-bottom: 1rem;
				padding-top: 0.5rem;
			}

			> h2 {
				${Fonts.bold32}
				margin-bottom: 3rem;
			}

			/* Contact Wrapper */
			> div {
				display: flex;
				flex-direction: column;
				gap: 1.7rem;
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
			grid-column: 1/3;
			background: linear-gradient(90deg, #e4e9f0 -7.97%, rgba(228, 233, 240, 0) 104.66%);
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0.5rem;
			padding: 2rem;

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
		display: flex;
		align-items: center;
		gap: 1.5rem;

		> div {
			width: 3rem;
			display: flex;
			justify-content: center;
		}

		> p {
			${Fonts.regular14}
			white-space: pre-wrap;
			line-height: 140%;
		}
	`;

	export const Homepage = styled.div`
		position: absolute;
		top: 0;
		right: 0;
		background-color: ${Colors.blue200};
		padding: 1.22rem 1rem;
		cursor: pointer;
	`;
}
