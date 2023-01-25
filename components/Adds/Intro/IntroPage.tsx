import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import { BoxShadows } from '../../../styles/shadows';
import { svgDownload } from '../../../styles/svgs';
import Link from 'next/link';
import { Secrets } from '../../../constants/secrets';
import { Devices } from '../../../styles/devices';
import useMobile from '../../../hooks/useMobile';

export default function IntroPage() {
	const isMobile = useMobile();
	return (
		<S.IntroPageLayout>
			<div>
				<h2>ADDS</h2>
				<h3>Alpha generation Digital Daily Survey</h3>
			</div>
			<div>
				<S.Subtitle>알파 세대에 대한 새로운 이해의 필요성</S.Subtitle>
				<div>
					<S.IntroBoxDouble>
						<h5>
							알파세대의 시작,
							<br />
							그리고 COVID_19 팬데믹
						</h5>
						<div>
							<h6>언택트 세대</h6>
							<div>비대면 선호도 증가</div>
							<h6>초연결 세대</h6>
							<div>24시간 정보, 또래관계 연결</div>
							<h6>멀티페르소나 세대</h6>
							<div>복수의 디지털 정체성</div>
							<h6>영상 세대</h6>
							<div>시각적 정보에 민감</div>
						</div>
					</S.IntroBoxDouble>
					<S.IntroBoxSingle>
						<h5>
							피할 수 없는 디지털 전환시대,
							<br />
							새로운 이론/교육/서비스 필요
						</h5>
						<div>
							<h6>알파세대 새로운 디지털 일상</h6>
							<h6>새로운 알파 교육</h6>
							<h6>새로운 알파 정책, 서비스</h6>
						</div>
					</S.IntroBoxSingle>
					<S.IntroAlphaBox>
						<h5>알파세대(Generation Alpha)</h5>
						<div>
							알파세대(Generation Alpha)는
							{!isMobile ? <br /> : ' '}
							이전 세대에서 경험하지 못한 기술과 디지털 환경을 가장 크게 누릴 것으로 예상되는
							세대입니다.
							{!isMobile ? <br /> : ' '}
							{!isMobile ? <br /> : ' '}
							이들은 대면보다 비대면을 선호하는 언택트 세대이자,
							{!isMobile ? <br /> : ' '}
							24시간 소셜네트워크와 인스턴트 메시지를 통해 또래와 정보로 연결된 초연결 세대,
							{!isMobile ? <br /> : ' '}
							다수의 SNS 계정을 관리하며 복수의 디지털 정체성으로 살아가는 멀티 페르소나 세대,
							{!isMobile ? <br /> : ' '}
							시각적 자극에 민감해 포털이 아닌 유튜브로 주요 검색을 하고 말보다 유튜브 검색을 먼저
							배우는 영상 중심 세대입니다.
							{!isMobile ? <br /> : ' '}
							{!isMobile ? <br /> : ' '}
							이전 세대와는 다른 알파 세대의 디지털 일상과 사회정서발달을 연구하는 것은,
							{!isMobile ? <br /> : ' '}
							우리 사회 주축이 될 미래를 연구하는 것입니다.
						</div>
					</S.IntroAlphaBox>
					<S.Circle />
				</div>
			</div>
			<div>
				<S.Subtitle>연도별 조사 실시 계획</S.Subtitle>
				<div>
					<img src='/assets/intro_plan.png' />
				</div>
			</div>
			<div>
				<S.Subtitle>소개 자료</S.Subtitle>
				<Link href={Secrets.GET_S3_YONSEI_ADDS_PDF_URL()} target='_blank'>
					{svgDownload}YONSEI ADDS PDF
				</Link>
			</div>
		</S.IntroPageLayout>
	);
}

namespace S {
	export const IntroPageLayout = styled.div`
		> div:not(:first-of-type) {
			padding: 0 2rem;
		}

		/* ADDS */
		> div:first-of-type {
			text-align: center;
			background-image: url(/assets/pattern_blue.png);
			background-repeat: no-repeat;
			background-size: cover;
			padding: 4.7rem 0;
			margin-bottom: 5rem;

			> h2,
			> h3 {
				color: ${Colors.white};
			}

			> h2 {
				${Fonts.bold40}
				margin-bottom: 1.5rem;
			}

			> h3 {
				${Fonts.regular30}
			}

			@media ${Devices.mobile} {
				padding: 3rem 0;
				margin-bottom: 2.4rem;

				> h2 {
					${Fonts.bold25}
				}

				> h3 {
					${Fonts.regular18}
				}
			}
		}

		/* 알파 세대에 대한 새로운 이해의 필요성 */
		> div:nth-of-type(2) > div {
			display: grid;
			grid-template-columns: min-content min-content;
			gap: 3rem;
			width: fit-content;
			margin: 0 auto;
			position: relative;
			margin-top: 10.6rem;
			margin-bottom: 13.6rem;

			@media ${Devices.mobile} {
				display: flex;
				flex-direction: column;
				width: 100%;
				margin-top: 2.4rem;
				margin-bottom: 4.1rem;
			}
		}

		/* 연도별 조사 실시 계획 */
		> div:nth-of-type(3) > div {
			width: 98%;
			margin: 2.4rem auto;
			margin-bottom: 7.8rem;

			> img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}

			@media ${Devices.mobile} {
				margin-bottom: 4.1rem;
			}
		}

		/* 소개 자료 */
		> div:nth-of-type(4) > a {
			${Fonts.medium16}
			width: fit-content;
			padding: 1rem;
			color: ${Colors.white};
			background-color: ${Colors.blue300};
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin-top: 2.4rem;
			cursor: pointer;
			transition: 0.3s ease;
			border-radius: 0.6rem;
			box-shadow: ${BoxShadows.smooth};

			&:hover {
				background-color: ${Colors.blue350};
			}

			&:active {
				background-color: ${Colors.blue450};
			}

			> svg > path {
				fill: ${Colors.white};
			}

			@media ${Devices.mobile} {
				margin-left: auto;
				margin-right: auto;
			}
		}
	`;

	export const Circle = styled.div`
		width: 40.5rem;
		height: 40.5rem;
		border-radius: 50%;
		border: 0.3rem solid ${Colors.gray100};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;

		@media ${Devices.mobile} {
			display: none;
		}
	`;

	export const Subtitle = styled.h4`
		${Fonts.bold20}
		border-left: 0.5rem solid ${Colors.blue300};
		padding: 0.2rem 1.6rem;
		padding-bottom: 0.5rem;
		word-break: keep-all;
		line-height: 130%;

		@media ${Devices.mobile} {
			${Fonts.bold18}
		}
	`;

	export const IntroBoxDouble = styled.div`
		box-shadow: ${BoxShadows.smooth};
		display: flex;
		flex-direction: column;
		background: ${Colors.white};

		> h5 {
			${Fonts.bold20}
			text-align: center;
			background-color: ${Colors.blue200};
			width: 37.9rem;
			padding: 1.8rem 0;
			line-height: 140%;
		}

		> div {
			display: grid;
			grid-template-columns: max-content 1fr;
			row-gap: 2.5rem;
			column-gap: 1.6rem;
			padding: 2.7rem;

			> h6 {
				${Fonts.medium16}
			}
		}

		@media ${Devices.mobile} {
			> h5 {
				${Fonts.bold18}
				width: 100%;
			}

			> div {
				grid-template-columns: max-content max-content;
				justify-content: space-around;

				> h6 {
					${Fonts.medium14}
				}

				> div {
					${Fonts.regular14}
				}
			}
		}
	`;

	export const IntroBoxSingle = styled(IntroBoxDouble)`
		> div {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			text-align: center;
			justify-content: center;
		}

		@media ${Devices.mobile} {
			> div {
				padding: 4.4rem 2rem;
			}
		}
	`;

	export const IntroAlphaBox = styled(IntroBoxSingle)`
		grid-column: 1/3;

		> h5 {
			width: 100%;
		}

		> div {
			${Fonts.medium15}
			line-height: 150%;

			@media ${Devices.mobile} {
				${Fonts.medium14}
				padding: 2.7rem 2rem;
				word-break: keep-all;
			}
		}
	`;
}
