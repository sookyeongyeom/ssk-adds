import styled from 'styled-components';
import { Sizes } from '../../styles/sizes';
import { BoxShadows } from '../../styles/shadows';
import { Fonts } from '../../styles/fonts';

export default function Header() {
	return (
		<S.HeaderLayout>
			<S.Logo src='/assets/header_logo.png' />
			<section>
				<S.MenuWrapper>
					<S.MenuBox>
						<h3>ADDS소개</h3>
						<ul>
							<li>ADDS 소개</li>
							<li>연구진 소개</li>
							<li>조사설계</li>
						</ul>
					</S.MenuBox>
					<S.MenuBox>
						<h3>발간물</h3>
						<ul>
							<li>발간물</li>
						</ul>
					</S.MenuBox>
					<S.MenuBox>
						<h3>데이터</h3>
						<ul>
							<li>자료안내</li>
							<li>데이터활용논문</li>
						</ul>
					</S.MenuBox>
					<S.MenuBox>
						<h3>소통공간</h3>
						<ul>
							<li>공지사항</li>
							<li>보도자료</li>
							<li>FAQ</li>
							<li>Contact</li>
						</ul>
					</S.MenuBox>
				</S.MenuWrapper>
				<S.LangSelect>
					<option>한국어</option>
					<option>영어</option>
				</S.LangSelect>
			</section>
		</S.HeaderLayout>
	);
}

namespace S {
	export const HeaderLayout = styled.header`
		width: 100vw;
		height: ${Sizes.desktopHeaderHeight};
		box-shadow: ${BoxShadows.smooth};
		display: flex;
		justify-content: center;
		gap: 31.3rem;

		> section {
			display: flex;
		}
	`;

	export const Logo = styled.img`
		width: 18rem;
		align-self: center;
	`;

	export const MenuWrapper = styled.div`
		display: flex;
		margin-right: 3.9rem;
	`;

	export const MenuBox = styled.div`
		cursor: pointer;
		position: relative;
		padding: 0 3.5rem;

		> h3 {
			${Fonts.regular18}
			height: ${Sizes.desktopHeaderHeight};
			display: flex;
			justify-content: center;
			align-items: center;
		}

		> ul {
			display: none;
			text-align: center;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%, calc(100% - 0.2rem));
			white-space: nowrap;
			border-top: 0.3rem solid black;

			> li {
				height: 4.3rem;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 15rem;

				&:hover {
					background-color: lightgray;
				}
			}
		}

		&:hover {
			> ul {
				display: block;
			}
		}
	`;

	export const LangSelect = styled.select`
		${Fonts.regular14}
		align-self: center;
		width: 11.6rem;
		padding: 0.4rem;
		border-radius: 0;
	`;
}
