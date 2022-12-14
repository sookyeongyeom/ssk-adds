import HomeCarousel from './HomeCarousel';
import HomeSlider from './HomeSlider';
import HomeSiteMap from './HomeSiteMap';
import styled from 'styled-components';
import { Sizes } from '../../styles/sizes';

export default function HomePage() {
	return (
		<S.HomePageLayout>
			<HomeSlider />
			<HomeCarousel />
			<HomeSiteMap />
		</S.HomePageLayout>
	);
}

namespace S {
	export const HomePageLayout = styled.div`
		width: ${Sizes.desktopHomeWidth};
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	`;
}
