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

		@media ${Devices.mobile} {
			display: flex;
			flex-direction: column;
			gap: 3.6rem;
		}
	`;

	export const MemberBox = styled.div<isPinnedType>`
		display: grid;
		grid-template-columns: 20.5rem 1fr;
		grid-template-rows: 22.5rem 1fr;
		box-shadow: ${BoxShadows.smooth};
		overflow: hidden;

		/* 사진 */
		> div:first-of-type {
			grid-row: 1/2;
			background-color: lightgray;

			> img {
				width: 100%;
				height: 100%;
				object-fit: cover;
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
		}

		@media ${Devices.desktop} {
			${(props) => props.isPinned && PinnedMemberBox}
		}

		@media ${Devices.mobile} {
			order: ${(props) => props.isPinned && -1};
			display: flex;
			flex-direction: column;
			position: relative;

			> div:first-of-type {
				width: 60vw;
				height: 70vw;
				margin: 0 auto;
				margin-top: 5.63rem;
			}

			> div:nth-of-type(2) {
				position: static;
				align-items: center;
				padding: 2rem 0;

				> p {
					${Fonts.regular16}
				}

				> h2 {
					${Fonts.bold30}
					margin-bottom: 1.5rem;
				}

				> div {
					gap: 0.5rem;

					> div {
						gap: 0.8rem;

						> div > svg {
							width: 2.5rem;
						}

						> p {
							${Fonts.regular12}
						}

						&:last-of-type {
							> div > svg {
								width: 2.3rem;
							}
						}
					}
				}
			}

			> div:last-of-type {
				padding: 1.45rem 1.5rem;

				> p {
					${Fonts.regular12}
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

	const PinnedMemberBox = css`
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
				margin-bottom: 3.7rem;
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
