import styled from 'styled-components';
import { Seo } from '../../constants/seo';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';
import { Paths } from '../../constants/paths';
import LinkItem from './LinkItem';
import { useRouter } from 'next/router';

export default function Sidebar({ path }: SidebarProps) {
	const router = useRouter();
	const routeTo = (path: string) => router.push(path);

	return (
		<S.SidebarLayout>
			<div>
				<S.Top
					onClick={() => routeTo(Paths.adds + Paths.intro)}
					isCurrent={[Paths.intro, Paths.member, Paths.research].includes(path)}>
					{Seo.Title.intro}
				</S.Top>
				<ul>
					<LinkItem
						href={Paths.adds + Paths.intro}
						title={Seo.Title.intro}
						isCurrent={path === Paths.intro}
					/>
					<LinkItem
						href={Paths.adds + Paths.member}
						title={Seo.Title.member}
						isCurrent={path === Paths.member}
					/>
					<LinkItem
						href={Paths.adds + Paths.research}
						title={Seo.Title.research}
						isCurrent={path === Paths.research}
					/>
				</ul>
			</div>
			<div>
				<S.Top
					onClick={() => routeTo(Paths.adds + Paths.publication)}
					isCurrent={[Paths.publication].includes(path)}>
					{Seo.Title.publication}
				</S.Top>
				<ul>
					<LinkItem
						href={Paths.adds + Paths.publication}
						title={Seo.Title.publication}
						isCurrent={path === Paths.publication}
					/>
				</ul>
			</div>
			<div>
				<S.Top
					onClick={() => routeTo(Paths.adds + Paths.resource)}
					isCurrent={[Paths.resource, Paths.paper].includes(path)}>
					{'데이터'}
				</S.Top>
				<ul>
					<LinkItem
						href={Paths.adds + Paths.resource}
						title={Seo.Title.resource}
						isCurrent={path === Paths.resource}
					/>
					<LinkItem
						href={Paths.adds + Paths.paper}
						title={Seo.Title.paper}
						isCurrent={path === Paths.paper}
					/>
				</ul>
			</div>
			<div>
				<S.Top
					onClick={() => routeTo(Paths.adds + Paths.notice)}
					isCurrent={[Paths.notice, Paths.news, Paths.faq, Paths.contact].includes(path)}>
					{'소통공간'}
				</S.Top>
				<ul>
					<LinkItem
						href={Paths.adds + Paths.notice}
						title={Seo.Title.notice}
						isCurrent={path === Paths.notice}
					/>
					<LinkItem
						href={Paths.adds + Paths.news}
						title={Seo.Title.news}
						isCurrent={path === Paths.news}
					/>
					<LinkItem
						href={Paths.adds + Paths.faq}
						title={Seo.Title.faq}
						isCurrent={path === Paths.faq}
					/>
					<LinkItem
						href={Paths.adds + Paths.contact}
						title={Seo.Title.contact}
						isCurrent={path === Paths.contact}
					/>
				</ul>
			</div>
		</S.SidebarLayout>
	);
}

namespace S {
	export const SidebarLayout = styled.aside`
		> div {
			border-top: 0.1rem solid gray;

			&:first-of-type {
				border: none;
			}

			&:last-of-type {
				border-bottom: 0.1rem solid gray;
			}
		}
	`;

	export const Top = styled.h3<TopProps>`
		padding: 2rem;
		background-color: ${(props) => props.isCurrent && Colors.blue200};
		border-bottom: 0.1rem solid gray;
		border-color: ${(props) => (props.isCurrent ? '' : 'transparent')};
		transition: border-color 1s ease;
		cursor: pointer;

		~ ul {
			line-height: ${(props) => (props.isCurrent ? '180%' : '0%')};
			padding: ${(props) => (props.isCurrent ? '1.8rem 2rem;' : '0rem 2rem')};
			opacity: ${(props) => (props.isCurrent ? '1' : '0')};
			transition: 0.5s ease;
			overflow: hidden;

			li {
				${Fonts.regular14}
			}
		}
	`;
}
