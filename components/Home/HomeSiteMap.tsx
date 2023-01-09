import styled from 'styled-components';
import { Seo } from '../../constants/seo';
import { Fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
import { BoxShadows } from '../../styles/shadows';
import { Paths } from '../../constants/paths';
import { useRouter } from 'next/router';
import { Devices } from '../../styles/devices';
import { SC } from '../../styles/styled';

export default function HomeSiteMap() {
	return (
		<S.HomeSiteMapLayout>
			<SiteMapElement
				title={Seo.Title.intro}
				paths={[Paths.intro, Paths.member, Paths.research]}
				iconSrc={'/assets/home_sitemap_handshake.svg'}
			/>
			<SiteMapElement
				title={Seo.Title.publication}
				paths={[Paths.publication]}
				iconSrc={'/assets/home_sitemap_news.svg'}
			/>
			<SiteMapElement
				title={'데이터'}
				paths={[Paths.resource, Paths.paper]}
				iconSrc={'/assets/home_sitemap_document.svg'}
			/>
			<SiteMapElement
				title={'소통공간'}
				paths={[Paths.notice, Paths.news, Paths.faq, Paths.contact]}
				iconSrc={'/assets/home_sitemap_info.svg'}
			/>
		</S.HomeSiteMapLayout>
	);
}

function SiteMapElement({ title, paths, iconSrc }: SiteMapElementProps) {
	const router = useRouter();
	const routeTo = (path: string) => router.push(path);

	return (
		<S.SiteMapElementLayout>
			<S.SiteMapBox>
				<h2>{title}</h2>
				{paths.map((path, i) => (
					<p onClick={() => routeTo(Paths.adds + path)} key={i}>
						{Seo.Title[path.slice(1)]}
					</p>
				))}
				<img src={iconSrc} />
			</S.SiteMapBox>
			{/* Mobile Menu */}
			<S.MobileMenu>
				{paths.map((path, i) => (
					<p onClick={() => routeTo(Paths.adds + path)} key={i}>
						{Seo.Title[path.slice(1)]}
					</p>
				))}
			</S.MobileMenu>
		</S.SiteMapElementLayout>
	);
}

namespace S {
	export const HomeSiteMapLayout = styled.section`
		display: flex;
		justify-content: space-between;
		margin-bottom: 10rem;

		@media ${Devices.mobile} {
			gap: 1.85rem;
			margin-bottom: 4.6rem;
			flex-direction: column;
		}
	`;

	export const SiteMapElementLayout = styled.div`
		@media ${Devices.mobile} {
			width: 100vw;
			display: flex;
			padding: 0 2rem;
			gap: 0.8rem;

			/* ADDS소개 아이콘 */
			&:nth-of-type(1) {
				> div:first-of-type {
					> img {
						width: 8rem;
						transform: rotateY(180deg);
						left: -0.2rem;
						bottom: 0.2rem;
					}
				}
			}

			/* 발간물 아이콘 */
			&:nth-of-type(2) {
				> div:first-of-type {
					> img {
						width: 8rem;
						left: 0.2rem;
						bottom: -2rem;
					}
				}
			}

			/* 데이터 아이콘 */
			&:nth-of-type(3) {
				> div:first-of-type {
					> img {
						width: 9rem;
						left: -0.75rem;
						bottom: 0rem;
					}
				}
			}

			/* 소통공간 아이콘 */
			&:nth-of-type(4) {
				> div:first-of-type {
					> img {
						width: 9.5rem;
						left: -0.2rem;
						bottom: -0.2rem;
					}
				}
			}
		}
	`;

	export const SiteMapBox = styled.div`
		background-color: ${Colors.blue200};
		width: 27.7rem;
		height: 27.7rem;
		padding: 4rem;
		transition: 0.3s ease;
		position: relative;

		> h2 {
			${Fonts.bold25}
			margin-bottom: 1rem;
		}

		> p {
			${Fonts.regular18}
			line-height: 145%;
		}

		> img {
			position: absolute;
			bottom: 1rem;
			right: 1rem;
			width: 12rem;
			transition: 0.3s ease;
		}

		@media ${Devices.desktop} {
			&:hover {
				padding: 0;
				display: flex;
				flex-direction: column;
				background-color: ${Colors.white};
				box-shadow: ${BoxShadows.smooth};

				> h2 {
					display: none;
				}

				> p {
					flex-grow: 1;
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					transition: 0.3s ease;
					transition-property: background-color;

					&:hover {
						background-color: ${Colors.blue250};
					}
				}

				> img {
					display: none;
				}
			}
		}

		@media ${Devices.mobile} {
			width: 50%;
			text-align: center;
			height: unset;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2rem;
			overflow: hidden;

			> h2 {
				${Fonts.medium15}
				margin-bottom: 0;
				position: relative;
				z-index: 1;
			}

			> p {
				display: none;
			}
		}
	`;

	export const MobileMenu = styled(SC.ShowIfMobile)`
		@media ${Devices.mobile} {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			gap: 0.7rem;

			> p {
				${Fonts.regular14}
				flex-grow: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 2.1rem 0;
				border: 0.1rem solid ${Colors.blue200};
			}
		}
	`;
}
