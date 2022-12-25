import styled from 'styled-components';
import { AdminHeaderProps } from '../../../@types/shared';
import { Fonts } from '../../../styles/fonts';
import { Sizes } from '../../../styles/sizes';
import useTitle from '../../../hooks/useTitlePath';
import { svgMenuBold, svgRedirect } from '../../../styles/svgs';
import { BoxShadows } from '../../../styles/shadows';
import { Colors } from '../../../styles/colors';
import { useRouter } from 'next/router';

export default function AdminHeader({ onToggleSidebar }: AdminHeaderProps) {
	const { title } = useTitle();
	const router = useRouter();
	const onRouteToHome = () => router.push('/home');
	return (
		<S.AdminHeaderLayout>
			<div>
				<button onClick={onToggleSidebar}>{svgMenuBold}</button>
				<h1>{title}</h1>
			</div>
			<div onClick={onRouteToHome}>
				{svgRedirect}
				<p>HOME</p>
			</div>
		</S.AdminHeaderLayout>
	);
}

namespace S {
	export const AdminHeaderLayout = styled.header`
		box-shadow: ${BoxShadows.smooth};
		background-color: ${Colors.white};
		height: ${Sizes.desktopAdminHeaderHeight};
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		z-index: 5;

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;

			> button {
				padding: 1rem;
				display: flex;
				align-items: center;

				> svg {
					position: relative;
					top: 0.1rem;
				}

				> svg > path {
					transition: 0.3s ease;
				}

				&:hover {
					> svg > path {
						fill: ${Colors.blue450};
					}
				}
			}

			> h1 {
				${Fonts.bold16}
				white-space: nowrap;
			}
		}

		> div:last-of-type {
			gap: 0.7rem;
			cursor: pointer;
			transform: translateX(75%);
			transition: 0.3s ease-in-out;
			padding: 1rem 0;

			> svg {
				position: relative;
				top: 0.1rem;

				> path {
					transition: 0.3s ease;
				}
			}

			> p {
				${Fonts.medium14}
				opacity: 0;
				transition: 0.3s ease;
			}

			&:hover {
				transform: translateX(0%);

				> p {
					opacity: 1;
					color: ${Colors.blue450};
				}

				> svg > path {
					fill: ${Colors.blue450};
				}
			}
		}
	`;
}
