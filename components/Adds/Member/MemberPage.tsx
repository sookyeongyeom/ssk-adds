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
import breakLineByAt from '../../../utils/breakLineByAt';
import { Responsibilities } from '../../../constants/responsibilities';
import removeWhiteSpaces from '../../../utils/removeWhiteSpaces';
import { css } from 'styled-components';
import Link from 'next/link';
import attachProtocol from '../../../utils/attachProtocol';

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
						isPinned={removeWhiteSpaces(member.responsibility) === Responsibilities.leader}
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
	isPinned,
}: MemberBoxElementProps) {
	let imgSrc: string = Assets.placeholderImgSrc;
	const parsedImg: FileDataType = stringToJson(img)?.[0];
	if (parsedImg) imgSrc = getDownloadLinkFromS3(S3Folders.member, parsedImg.key);
	return (
		<S.MemberBox isPinned={isPinned}>
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
				<Link href={attachProtocol(homepage)} passHref>
					<S.Homepage>{svgMemberHomepage}</S.Homepage>
				</Link>
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
		column-gap: 2.7rem;
		row-gap: 9rem;

		> div:last-of-type {
			margin-top: calc(${Sizes.desktopPageButtonMarginTop} - 3rem);
			grid-column: 1/3;
		}
	`;

	export const MemberBox = styled.div<isPinnedType>`
		display: grid;
		grid-template-columns: 20.5rem 1fr;
		grid-template-rows: 22.5rem 1fr;
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
			padding: 0 4rem;
			padding-top: 0.7rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;

			> p {
				${Fonts.regular18}
				margin-bottom: 1rem;
			}

			> h2 {
				${Fonts.bold32}
				margin-bottom: 2.5rem;
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
			background: ${Colors.blue100};
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0.5rem;
			padding: 1.5rem 2rem;

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

		${(props) => props.isPinned && PinnedMemberBox}
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

	export const PinnedMemberBox = css`
		width: 95%;
		margin: 0 auto;
		grid-column: 1/3;
		grid-row: 1/2;
		grid-template-columns: 27rem 1fr;
		grid-template-rows: 1fr min-content;
		height: 33.6rem;

		> div:first-of-type {
			grid-row: 1/3;
		}

		> div:nth-of-type(2) {
			justify-content: flex-end;
			padding-bottom: 4rem;

			> h2 {
				margin-bottom: 4rem;
			}
		}

		> div:nth-of-type(2) > div {
			flex-direction: row;

			> div {
				flex-grow: 1;

				&:last-of-type > div > svg {
					position: relative;
					top: 0.15rem;
				}
			}

			> div > p {
				${Fonts.regular16}
				white-space: nowrap;
			}
		}

		> div:last-of-type {
			grid-column: 2/3;
			padding: 1.7rem 2rem;

			> p {
				${Fonts.regular18}
			}
		}
	`;
}
