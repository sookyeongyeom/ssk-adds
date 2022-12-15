import styled from 'styled-components';
import { Seo } from '../../constants/seo';
import { Fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
import { BoxShadows } from '../../styles/shadows';
import { Paths } from '../../constants/paths';
import { useRouter } from 'next/router';

export default function HomeSiteMap() {
	return (
		<S.HomeSiteMapLayout>
			<SiteMapElement
				title={Seo.Title.intro}
				paths={[Paths.intro, Paths.member]}
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
		<S.SiteMapBox>
			<h2>{title}</h2>
			{paths.map((path, i) => (
				<p onClick={() => routeTo(Paths.adds + path)} key={i}>
					{Seo.Title[path.slice(1)]}
				</p>
			))}
			<img src={iconSrc} />
		</S.SiteMapBox>
	);
}

namespace S {
	export const HomeSiteMapLayout = styled.section`
		display: flex;
		justify-content: space-between;
		margin-bottom: 10rem;
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
	`;
}
