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

export default function MemberPage() {
	const [members, setMembers] = useState<ResponseMember.Get>();
	const { page, onChangePage } = useChangePage();

	useEffect(() => {
		useGet(() => getMember({ page }), setMembers);
	}, [page]);

	return (
		<S.MemberPageLayout>
			{members ? (
				members.items.map((member, i) => (
					<MemberBoxElement
						name={member.name}
						email={member.email}
						homepage={member.homepage}
						phoneNumber={member.phoneNumber}
						introBody={member.introBody}
						jobTitle={member.jobTitle}
						img={'/assets/members_example.png'}
						responsibility={member.responsibility}
						key={i}
					/>
				))
			) : (
				<MemberBoxElement
					name={'김현경 교수님'}
					email={'yonsei@gmail.com'}
					homepage={'https://www.naver.com'}
					phoneNumber={'010-0000-0000'}
					jobTitle={'연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수'}
					introBody={'청소년, 바이오마커 수집, 양적 연구 설계 전문성'}
					img={'/assets/members_example.png'}
					responsibility={'연구책임자'}
				/>
			)}
			<div>
				<PageButton currentPage={page} totalPosts={members?.total} onChangePage={onChangePage} />
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
	return (
		<S.MemberBox>
			<div>
				<img src={img} />
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
						<h4>Tel</h4>
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
		grid-template-rows: max-content max-content;
		min-height: 32.7rem;
		box-shadow: ${BoxShadows.smooth};

		/* 사진 */
		> div:first-of-type {
			grid-row: 1/3;
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
			padding: 3.4rem;

			> p {
				${Fonts.regular16}
				margin-bottom: 1rem;
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
		}

		/* Homepage */
		&:last-of-type {
			grid-column: 1/3;
		}
	`;
}
