import styled from 'styled-components';
import { svgLeft14, svgRight14 } from '../../styles/svgs';
import { MutableRefObject, useRef, useState } from 'react';
import { Colors } from '../../styles/colors';
import { Sizes } from '../../styles/sizes';
import { Devices } from '../../styles/devices';
import { Urls } from '../../constants/urls';
import Link from 'next/link';

export default function HomeCarousel() {
	const [itemIdx, setItemIdx] = useState(0);
	const carouselWrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

	const onPrev = () => {
		carouselWrapperRef.current.style.transition = '0.3s ease';
		setItemIdx(itemIdx - 1);
		if (itemIdx === 0) {
			setTimeout(() => {
				carouselWrapperRef.current.style.transition = 'none';
				setItemIdx(4);
			}, 300);
		}
	};

	const onNext = () => {
		carouselWrapperRef.current.style.transition = '0.3s ease';
		setItemIdx(itemIdx + 1);
		if (itemIdx === 4) {
			setTimeout(() => {
				carouselWrapperRef.current.style.transition = 'none';
				setItemIdx(0);
			}, 300);
		}
	};

	return (
		<S.HomeCarouselLayout>
			<div>
				<div onClick={onPrev}>{svgLeft14}</div>
				<S.CarouselWindow>
					<S.CarouselWrapper itemIdx={itemIdx} ref={carouselWrapperRef}>
						<S.CarouselItem>
							<Link href={Urls.carouselLife}>
								<img src='/assets/home_carousel_life.svg' />
							</Link>
						</S.CarouselItem>
						<S.CarouselItem>
							<Link href={Urls.carouselYonsei}>
								<img src='/assets/header_logo.png' />
							</Link>
						</S.CarouselItem>
						<S.CarouselItem>
							<Link href={Urls.carouselNrf}>
								<img src='/assets/home_carousel_nrf.jpeg' />
							</Link>
						</S.CarouselItem>
						<S.CarouselItem>
							<Link href={Urls.carouselYouth}>
								<img src='/assets/home_carousel_youth.png' />
							</Link>
						</S.CarouselItem>
						<S.CarouselItem>
							<Link href={Urls.carouselSsk}>
								<img src='/assets/home_carousel_ssk.png' />
							</Link>
						</S.CarouselItem>
						<S.CarouselItem>
							<Link href={Urls.carouselLife}>
								<img src='/assets/home_carousel_life.svg' />
							</Link>
						</S.CarouselItem>
						<S.CarouselItem>
							<Link href={Urls.carouselYonsei}>
								<img src='/assets/header_logo.png' />
							</Link>
						</S.CarouselItem>
						<S.CarouselItem>
							<Link href={Urls.carouselNrf}>
								<img src='/assets/home_carousel_nrf.jpeg' />
							</Link>
						</S.CarouselItem>
						<S.CarouselItem>
							<Link href={Urls.carouselYouth}>
								<img src='/assets/home_carousel_youth.png' />
							</Link>
						</S.CarouselItem>
					</S.CarouselWrapper>
				</S.CarouselWindow>
				<div onClick={onNext}>{svgRight14}</div>
			</div>
			<div>
				<S.ItemIndicator isCurrent={itemIdx === 0 || itemIdx === 5} />
				<S.ItemIndicator isCurrent={itemIdx === 1} />
				<S.ItemIndicator isCurrent={itemIdx === 2} />
				<S.ItemIndicator isCurrent={itemIdx === 3} />
				<S.ItemIndicator isCurrent={itemIdx === 4 || itemIdx === -1} />
			</div>
		</S.HomeCarouselLayout>
	);
}

namespace S {
	export const HomeCarouselLayout = styled.section`
		margin-bottom: 7.6rem;

		> div:first-of-type {
			padding: 3.4rem 6.2rem;
			display: flex;
			align-items: center;
			gap: 2.9rem;

			> div {
				cursor: pointer;
			}
		}

		> div:last-of-type {
			display: flex;
			justify-content: center;
			gap: 1.3rem;
			padding: 1.2rem 0;
		}

		@media ${Devices.mobile} {
			width: 100vw;
			margin-bottom: 3.7rem;

			> div:first-of-type {
				gap: 2.1rem;
				padding: 0 2rem;
			}
		}
	`;

	export const CarouselWindow = styled.div`
		overflow: hidden;
	`;

	export const CarouselWrapper = styled.div<CarouselWrapperProps>`
		display: flex;
		justify-content: space-between;
		gap: ${Sizes.desktopCarouselWrapperGap};
		position: relative;
		left: calc(
			(${Sizes.desktopCarouselItemWidth} + ${Sizes.desktopCarouselWrapperGap}) * -1 *
				(${(props) => props.itemIdx} + 1)
		);
		transition: 0.3s ease;

		@media ${Devices.mobile} {
			gap: unset;
			left: calc(-100% * (${(props) => props.itemIdx} + 1));
		}
	`;

	export const CarouselItem = styled.li`
		flex: none;
		width: ${Sizes.desktopCarouselItemWidth};
		height: ${Sizes.desktopCarouselItemHeight};

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}

		@media ${Devices.mobile} {
			width: 100%;
			padding: 1rem;
		}
	`;

	export const ItemIndicator = styled.div<IndicatorProps>`
		width: 0.9rem;
		height: 0.9rem;
		border-radius: 50%;
		border: 0.1rem solid ${Colors.gray400};
		background-color: ${(props) => props.isCurrent && Colors.gray400};

		@media ${Devices.mobile} {
			width: 0.8rem;
			height: 0.8rem;
		}
	`;
}
