import styled from 'styled-components';
import { Sizes } from '../../styles/sizes';
import { BoxShadows } from '../../styles/shadows';
import { Fonts } from '../../styles/fonts';
import Link from 'next/link';
import { Paths } from '../../constants/paths';
import { Seo } from '../../constants/seo';
import LinkItem from './LinkItem';
import { Colors } from '../../styles/colors';
import SelectBox from './SelectBox';

export default function Header() {
	return (
		<S.HeaderLayout>
			<S.LogoLink href='/home'>
				<img src='/assets/header_logo.png' />
			</S.LogoLink>
			<section>
				<S.MenuWrapper>
					<S.MenuBox>
						<LinkItem href={Paths.adds + Paths.intro} title={Seo.Title.intro} />
						<ul>
							<LinkItem href={Paths.adds + Paths.intro} title={Seo.Title.intro} />
							<LinkItem href={Paths.adds + Paths.member} title={Seo.Title.member} />
							<LinkItem href={Paths.adds + Paths.research} title={Seo.Title.research} />
						</ul>
					</S.MenuBox>
					<S.MenuBox>
						<LinkItem href={Paths.adds + Paths.publication} title={Seo.Title.publication} />
						<ul>
							<LinkItem href={Paths.adds + Paths.publication} title={Seo.Title.publication} />
						</ul>
					</S.MenuBox>
					<S.MenuBox>
						<LinkItem href={Paths.adds + Paths.resource} title={'데이터'} />
						<ul>
							<LinkItem href={Paths.adds + Paths.resource} title={Seo.Title.resource} />
							<LinkItem href={Paths.adds + Paths.paper} title={Seo.Title.paper} />
						</ul>
					</S.MenuBox>
					<S.MenuBox>
						<LinkItem href={Paths.adds + Paths.notice} title={'소통공간'} />
						<ul>
							<LinkItem href={Paths.adds + Paths.notice} title={Seo.Title.notice} />
							<LinkItem href={Paths.adds + Paths.news} title={Seo.Title.news} />
							<LinkItem href={Paths.adds + Paths.faq} title={Seo.Title.faq} />
							<LinkItem href={Paths.adds + Paths.contact} title={Seo.Title.contact} />
						</ul>
					</S.MenuBox>
				</S.MenuWrapper>
				<SelectBox options={['한국어', '영어']} />
			</section>
		</S.HeaderLayout>
	);
}

namespace S {
	export const HeaderLayout = styled.header`
		min-width: ${Sizes.desktopAddsWidth};
		height: ${Sizes.desktopHeaderHeight};
		box-shadow: ${BoxShadows.smooth};
		display: flex;
		justify-content: center;
		gap: 31.3rem;

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
			transform: translate(-50%, calc(100% - 0.4rem));
			white-space: nowrap;
			border-top: 0.4rem solid ${Colors.headerBorder};
			background-color: ${Colors.white};
			z-index: 10;

			li {
				height: 6rem;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 15rem;
				background-color: ${Colors.headerDefault};

				&:hover {
					background-color: ${Colors.headerHover};
				}
			}
		}

		&:hover {
			> ul {
				display: block;
			}
		}
	`;
}
