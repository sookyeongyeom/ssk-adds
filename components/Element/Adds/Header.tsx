import styled from 'styled-components';
import { Sizes } from '../../../styles/sizes';
import { BoxShadows } from '../../../styles/shadows';
import { Fonts } from '../../../styles/fonts';
import Link from 'next/link';
import { Paths } from '../../../constants/paths';
import { Seo } from '../../../constants/seo';
import LinkItem from '../Shared/LinkItem';
import { Colors } from '../../../styles/colors';
import SelectBox from './SelectBox';
import { Devices } from '../../../styles/devices';
import { svgMenu30 } from '../../../styles/svgs';
import { SC } from '../../../styles/styled';
import { useEffect, useState } from 'react';
import useMobile from '../../../hooks/useMobile';
import { HeaderProps } from '../../../@types/adds';

export default function Header({ onOpenDrawer }: HeaderProps) {
	const [isShorten, setIsShorten] = useState(false);
	const isMobile = useMobile();

	const onScroll = () => {
		/* Shorten if mobile scrolled */
		if (window.scrollY > 20 && isMobile) {
			setIsShorten(true);
		} else setIsShorten(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [isMobile]);

	return (
		<S.HeaderLayout isShorten={isShorten}>
			<S.MobileMenu onClick={onOpenDrawer}>{svgMenu30}</S.MobileMenu>
			<S.LogoLink href='/home'>
				{!isShorten ? <img src='/assets/header_logo.png' /> : <img src='/assets/footer_logo.png' />}
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
	export const HeaderLayout = styled.header<isShortenType>`
		min-width: ${Sizes.desktopAddsWidth};
		height: ${Sizes.desktopHeaderHeight};
		box-shadow: ${BoxShadows.smooth};
		display: flex;
		justify-content: center;
		gap: 31.3rem;

		> section {
			display: flex;
		}

		@media ${Devices.mobile} {
			min-width: unset;
			width: 100%;
			gap: unset;
			justify-content: space-between;
			padding: 0 2.4rem;
			position: fixed;
			z-index: 50;
			background-color: ${Colors.white};
			height: ${(props) => props.isShorten && Sizes.mobileShortenHeaderHeight};
			transition: 0.5s ease height;

			/* Shorten Yonsei Logo */
			> a {
				width: ${(props) => props.isShorten && '3.5rem'};
			}

			> section {
				display: none;
			}
		}
	`;

	export const LogoLink = styled(Link)`
		align-self: center;
		display: flex;
		width: 18rem;

		> img {
			width: 100%;
			height: 100%;
			object-fit: contain;
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

	export const MobileMenu = styled(SC.ShowIfMobile)`
		display: none;
		cursor: pointer;

		@media ${Devices.mobile} {
			display: flex;
			align-items: center;
		}
	`;
}
