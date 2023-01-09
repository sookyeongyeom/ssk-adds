import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Devices } from '../../../styles/devices';
import { Fonts } from '../../../styles/fonts';
import { Sizes } from '../../../styles/sizes';

export default function Footer() {
	return (
		<S.FooterLayout>
			<S.Logo src='/assets/footer_logo.png' />
			<S.Description>
				연세대학교 SSK ADDS 연구팀
				<br />
				Alpha generation Digital Daily Survey
			</S.Description>
			<S.Contact>
				(03722) 서울시 서대문구 연세로 50 연세우유(708동) 309호
				<br />
				COPYRIGHTS (C) COLLEGE OF HUMAN ECOLOGY OF YONSEI. ALL RIGHTS RESERVED.
			</S.Contact>
		</S.FooterLayout>
	);
}

namespace S {
	export const FooterLayout = styled.footer`
		width: 100vw;
		min-width: ${Sizes.desktopAddsWidth};
		min-height: ${Sizes.desktopFooterHeight};
		background-color: ${Colors.blue100};
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.4rem;
		position: absolute;
		bottom: 0;

		@media ${Devices.mobile} {
			min-width: unset;
			flex-direction: column;
			text-align: center;
			gap: 0.8rem;
			padding: 2.7rem 2rem;
			position: relative;
		}
	`;

	export const Logo = styled.img`
		width: 5.4rem;
		position: relative;
		top: 0.1rem;
	`;

	export const Description = styled.div`
		${Fonts.medium16}
		line-height: 130%;
		word-break: keep-all;

		@media ${Devices.mobile} {
			line-height: 140%;
			margin-bottom: 0.8rem;
		}
	`;

	export const Contact = styled.div`
		${Fonts.regular14}
		line-height: 150%;
		word-break: keep-all;

		@media ${Devices.mobile} {
			${Fonts.regular12}
			line-height: 160%;
		}
	`;
}
