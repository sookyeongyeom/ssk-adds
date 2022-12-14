import styled from 'styled-components';
import { Sizes } from '../../styles/sizes';
import { BoxShadows } from '../../styles/shadows';
import { Fonts } from '../../styles/fonts';
import Link from 'next/link';
import { Paths } from '../../constants/paths';
import { Seo } from '../../constants/seo';

export default function Header() {
	return (
		<S.HeaderLayout>
			<S.LogoLink href='/home'>
				<img src='/assets/header_logo.png' />
			</S.LogoLink>
			<section>
				<S.MenuWrapper>
					<S.MenuBox>
						<MenuLinkItem href={Paths.adds + Paths.intro} menu={Seo.Title.intro} />
						<ul>
							<MenuLinkItem href={Paths.adds + Paths.intro} menu={Seo.Title.intro} />
							<MenuLinkItem href={Paths.adds + Paths.member} menu={Seo.Title.member} />
							<MenuLinkItem href={Paths.adds + Paths.research} menu={Seo.Title.research} />
						</ul>
					</S.MenuBox>
					<S.MenuBox>
						<MenuLinkItem href={Paths.adds + Paths.publication} menu={Seo.Title.publication} />
						<ul>
							<MenuLinkItem href={Paths.adds + Paths.publication} menu={Seo.Title.publication} />
						</ul>
					</S.MenuBox>
					<S.MenuBox>
						<MenuLinkItem href={Paths.adds + Paths.resource} menu={'데이터'} />
						<ul>
							<MenuLinkItem href={Paths.adds + Paths.resource} menu={Seo.Title.resource} />
							<MenuLinkItem href={Paths.adds + Paths.paper} menu={Seo.Title.paper} />
						</ul>
					</S.MenuBox>
					<S.MenuBox>
						<MenuLinkItem href={Paths.adds + Paths.notice} menu={'소통공간'} />
						<ul>
							<MenuLinkItem href={Paths.adds + Paths.notice} menu={Seo.Title.notice} />
							<MenuLinkItem href={Paths.adds + Paths.news} menu={Seo.Title.news} />
							<MenuLinkItem href={Paths.adds + Paths.faq} menu={Seo.Title.faq} />
							<MenuLinkItem href={Paths.adds + Paths.contact} menu={Seo.Title.contact} />
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

const MenuLinkItem = ({ href, menu }: MenuLinkItemProps) => {
	return (
		<Link href={href}>
			<li>{menu}</li>
		</Link>
	);
};

namespace S {
	export const HeaderLayout = styled.header`
		width: 100vw;
		height: ${Sizes.desktopHeaderHeight};
		box-shadow: ${BoxShadows.smooth};
		display: flex;
		justify-content: center;
		gap: 31.3rem;
		min-width: 120rem;

		> section {
			display: flex;
		}
	`;

	export const LogoLink = styled(Link)`
		align-self: center;
		display: flex;

		> img {
			width: 18rem;
		}
	`;

	export const MenuWrapper = styled.div`
		display: flex;
		margin-right: 3.9rem;
	`;

	export const MenuBox = styled.div`
		cursor: pointer;
		position: relative;

		> a > li {
			${Fonts.regular18}
			height: ${Sizes.desktopHeaderHeight};
			display: flex;
			justify-content: center;
			align-items: center;
			white-space: nowrap;
			padding: 0 3.5rem;
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

			li {
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
