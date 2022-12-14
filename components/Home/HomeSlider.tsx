import { useState } from 'react';
import styled from 'styled-components';
import useInterval from '../../hooks/useInterval';
import { Times } from '../../constants/times';
import { Sizes } from '../../styles/sizes';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

export default function HomeSlider() {
	const [slideIdx, setSlideIdx] = useState(0);
	const [isFlashed, setIsFlashed] = useState(false);
	const [delay, setDelay] = useState<number>(Times.homeSliderDelay);

	useInterval(() => {
		/* 첫번째 슬라이드로 돌아왔다면 */
		if (isFlashed) {
			setIsFlashed(false);
			setDelay(Times.homeSliderDelay);
		}
		/* 마지막 슬라이드라면 */
		if (slideIdx === 5) {
			setSlideIdx(0);
			setIsFlashed(true);
			setDelay(0);
		} else setSlideIdx(slideIdx + 1);
	}, delay);

	return (
		<S.HomeSliderLayout>
			<S.SliderImageWrapper slideIdx={slideIdx} isFlashed={isFlashed}>
				<S.SliderImage>
					<img src='/assets/home_slide_1.jpg' />
				</S.SliderImage>
				<S.SliderImage>
					<img src='/assets/home_slide_2.jpg' />
				</S.SliderImage>
				<S.SliderImage>
					<img src='/assets/home_slide_3.jpg' />
				</S.SliderImage>
				<S.SliderImage>
					<img src='/assets/home_slide_4.jpg' />
				</S.SliderImage>
				<S.SliderImage>
					<img src='/assets/home_slide_5.jpg' />
				</S.SliderImage>
				<S.SliderImage>
					<img src='/assets/home_slide_1.jpg' />
				</S.SliderImage>
			</S.SliderImageWrapper>
			<S.Shade>
				<h2>알파 세대, 피할 수 없는 디지털 대전환 시대</h2>
				<h1>
					<span>뉴노멀 시대를 위한 혁신,</span>
					<br />
					알파 세대 디지털 일상 종단
					<br />
					ADDS 데이터
				</h1>
				<div>
					<S.SliderIndicator isCurrent={slideIdx === 0 || slideIdx === 5} />
					<S.SliderIndicator isCurrent={slideIdx === 1} />
					<S.SliderIndicator isCurrent={slideIdx === 2} />
					<S.SliderIndicator isCurrent={slideIdx === 3} />
					<S.SliderIndicator isCurrent={slideIdx === 4} />
				</div>
			</S.Shade>
		</S.HomeSliderLayout>
	);
}

namespace S {
	export const HomeSliderLayout = styled.section`
		height: ${Sizes.desktopHomeSliderHeight};
		overflow: hidden;
		position: relative;
		z-index: -10;
		margin-bottom: 7.1rem;
	`;

	export const SliderImageWrapper = styled.div<SliderImageWrapperProps>`
		height: inherit;
		display: flex;
		position: absolute;
		left: ${(props) =>
			`${props.slideIdx * Number(Sizes.desktopHomeWidth.replace('rem', '')) * -1}rem`};
		transition: ${(props) => (props.isFlashed ? 'none' : '2s cubic-bezier(0,.72,.3,1.01)')};
	`;

	export const SliderImage = styled.div`
		width: 120rem;
		flex-shrink: 0;

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	`;

	export const Shade = styled.div`
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(270deg, rgba(28, 28, 28, 0.5) 0%, rgba(217, 217, 217, 0) 100%);
		padding: 7.6rem 10.2rem;

		> h1,
		> h2 {
			text-align: right;
			color: ${Colors.white};
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		}

		> h1 {
			${Fonts.bold35}
			line-height: 140%;

			> span {
				position: relative;
				left: 1rem;
			}
		}

		> h2 {
			${Fonts.regular16}margin-bottom: 0.3rem;
			margin-right: 0.5rem;
		}

		> div {
			position: absolute;
			left: 7.3rem;
			bottom: 5.3rem;
			display: flex;
			gap: 1rem;
		}
	`;

	export const SliderIndicator = styled.div<IndicatorProps>`
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		border: 0.15rem solid ${Colors.white};
		background-color: ${(props) => props.isCurrent && Colors.white};
	`;
}
