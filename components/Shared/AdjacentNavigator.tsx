import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { svgUp11, svgDown12 } from '../../styles/svgs';
import { Fonts } from '../../styles/fonts';
import { AdjacentNavigatorProps } from '../../@types/shared';
import Link from 'next/link';

export default function AdjacentNavigator({ prev, next }: AdjacentNavigatorProps) {
	return (
		<S.AdjacentNavigatorLayout isPrevExist={!!prev} isNextExist={!!next}>
			<div>
				<h5>{svgUp11}윗글</h5>
				<p>
					<Link href={next?.path || ''}>{next && next?.title}</Link>
				</p>
			</div>
			<div>
				<h5>{svgDown12}아랫글</h5>
				<p>
					<Link href={prev?.path || ''}>{prev && prev?.title}</Link>
				</p>
			</div>
		</S.AdjacentNavigatorLayout>
	);
}

namespace S {
	export const AdjacentNavigatorLayout = styled.div<AdjacentNavigatorLayoutProps>`
		border-top: 0.1rem solid ${Colors.gray150};
		border-bottom: 0.1rem solid ${Colors.gray150};

		> div {
			padding: 1.6rem 2.1rem;
			display: flex;
			gap: 3.2rem;

			> h5 {
				${Fonts.medium14}
				width: 6.5rem;

				> svg {
					margin-right: 1.1rem;
					position: relative;
					top: -0.1rem;
				}
			}

			> p {
				${Fonts.regular14}
				cursor: pointer;
			}
		}

		> div:first-of-type {
			border-bottom: 0.1rem solid ${Colors.gray150};

			> h5 {
				color: ${(props) => !props.isNextExist && Colors.gray200};
			}
		}

		> div:last-of-type {
			> h5 {
				color: ${(props) => !props.isPrevExist && Colors.gray200};
			}
		}
	`;
}
