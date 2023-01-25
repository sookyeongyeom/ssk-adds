import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import { BoxShadows } from '../../../styles/shadows';
import { Devices } from '../../../styles/devices';
import useMobile from '../../../hooks/useMobile';
import { ResearchBoxElementProps } from '../../../@types/adds';

export default function ResearchPage() {
	const isMobile = useMobile();

	return (
		<S.ResearchPageLayout>
			<ResearchBoxElement
				title={!isMobile ? '기초 설문조사 (ADDS-C; Core)' : '기초 설문조사\n(ADDS-C; Core)'}
				description={
					'알파세대 아동의 일상과 사회정서발달을 파악하기 위한 기초 설문조사입니다.\n아동의 기질, 우울, 불안, 스트레스, 문제행동, 학교 적응 뿐 아니라 아동의 디지털 또래관계, 디지털 가정환경 등 아동의 디지털 일상을 다각도로 파악합니다.\n연중 1회 온라인 설문을 통해 진행합니다'
				}
			/>
			<ResearchBoxElement
				title={'알파 세대 디지털 일상 데이터\n(ADDS-D; Daily)'}
				description={
					'알파세대 아동의 디지털 관련 일상을 EMA (Ecological momentary assessment) 방식으로 측정합니다.\n아동의 하루동안의 정서, 스트레스, 활동성 그리고 디지털 사용을 수집하며 1주일간 매일 같은 시간에 측정해 아동의 일상생활과 밀접한 데이터를 수집하고자 하였습니다.\n기초설문조사(ADDS-C), 스마트디바이스 측정(ADDS-S) 데이터와 함께 활용해 알파 세대 아동의 일상과 디지털 활동을 심도있게 파악할 수 있습니다 '
				}
			/>
			<ResearchBoxElement
				title={
					!isMobile
						? '알파 세대의 사회화 과정에 관한 질적 데이터\n(ADDS-Q; Qualitative)'
						: '알파 세대의 사회화 과정에 관한\n질적 데이터\n(ADDS-Q; Qualitative)'
				}
				description={
					'알파세대 아동과 주양육자의 디지털 일상과 사회화을 파악하기 위한 질적 연구입니다.\n아동의 일상, 사회 연결망, 디지털 환경, 모바일/인공지능 기기 사용, 환경감수성, 놀이성 등 변화한 환경에 따른 아동의 일상생활과 관련된 질적 데이터를 수집하고 있습니다.\n아동과 주양육자를 대상으로 연중 1회 온라인 인터뷰를 진행합니다.'
				}
			/>
			<ResearchBoxElement
				title={
					!isMobile
						? '알파 세대 일상에 대한 스마트 디바이스 측정\n(ADDS-S; Smart)'
						: '알파 세대 일상에 대한\n스마트 디바이스 측정\n(ADDS-S; Smart)'
				}
				description={
					'알파세대 아동의 일상 활동량 파악을 위한 스마트 디바이스 측정 조사입니다.\n약 10일 간의 Fitbit 스마트워치 착용을 통해 아동의 신체활동시간, 수면시간, 걸음 수 등 신체활동 관련 일상정보를 수집하고자 합니다.\n디지털 일상 데이터(ADDS-D)와 함께 활용해 알파 세대 아동의 일상과 신체 활동을 깊이 이해할 수 있습니다.'
				}
			/>
			<ResearchBoxElement
				title={'생체 지표 (ADDS-B; Bio)'}
				description={
					'(타액) 타액(Salivary) 코티졸, DHEA(Dehydroepiandrosterone), ACTH(adrenocorticotropic), 카테콜아민(Catecholamine) 등의 지표를 통해 스트레스에 대한 생리적 반응 측정\n\n(전기 반응 센서) EMG(Electro–myography), BIA(Bio-Impedence Analysis), DOMA(Detection Of Muscle Activation), ECG(Electro- cardiogram)\n\n1차년도 프로토콜 세팅, 2차년도 20명 대상 파일럿 테스트 후, 3차년도 200명 대상 생체지표 측정'
				}
			/>
		</S.ResearchPageLayout>
	);
}

function ResearchBoxElement({ title, description }: ResearchBoxElementProps) {
	const [isHover, setIsHover] = useState(true);
	// const isMobile = useMobile();

	// const onMouseEnter = () => !isMobile && setIsHover(true);
	// const onMouseLeave = () => !isMobile && setIsHover(false);
	// const onClick = () => isMobile && setIsHover(!isHover);

	// useEffect(() => {
	// 	setIsHover(false);
	// }, [isMobile]);

	return (
		<S.ResearchBox
			// onMouseEnter={onMouseEnter}
			// onMouseLeave={onMouseLeave}
			// onClick={onClick}
			isHover={isHover}>
			<S.Title as={!isHover ? 'pre' : 'h2'} isHover={isHover}>
				{title}
			</S.Title>
			{isHover && <S.Description>{description}</S.Description>}
			{!isHover && <S.Fold />}
		</S.ResearchBox>
	);
}

namespace S {
	export const ResearchPageLayout = styled.div`
		display: flex;
		flex-direction: column;
		gap: 3.1rem;

		/* 생체지표 */
		> div:last-of-type {
			/* height: 30rem; */
			/* gap: 2.5rem; */
			/* line-height: 130%; */
		}

		@media ${Devices.mobile} {
			/* 생체지표 */
			> div:last-of-type {
				/* height: 38rem; */
			}
		}
	`;

	export const ResearchBox = styled.div<ResearchBoxProps>`
		width: 100%;
		/* height: 24rem; */
		background-image: ${(props) =>
			!props.isHover ? 'url(/assets/pattern_white.png)' : 'url(/assets/pattern_blue.png)'};
		background-repeat: no-repeat;
		background-size: cover;
		transition: 0.3s ease;
		transition-property: background;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		justify-content: center;
		padding: ${(props) => (!props.isHover ? '7rem' : '4.5rem 4.8rem 4.8rem 4.8rem')};
		position: relative;
		box-shadow: ${BoxShadows.smooth};

		@media ${Devices.mobile} {
			padding: ${(props) => (!props.isHover ? '3.9rem' : '3rem 3rem 3.5rem 3rem')};
			/* justify-content: ${(props) => props.isHover && 'flex-start'}; */
			gap: 2rem;
			overflow: scroll;
			/* height: 26rem; */
		}
	`;

	export const Title = styled.h2<ResearchBoxProps>`
		${(props) => (!props.isHover ? Fonts.bold28 : Fonts.bold20)}
		color: ${(props) => props.isHover && Colors.blue100};
		line-height: 130%;

		@media ${Devices.mobile} {
			${(props) => (!props.isHover ? Fonts.bold18 : Fonts.bold16)}
			line-height: 150%;
		}
	`;

	export const Description = styled.pre`
		${Fonts.medium16}
		padding: 0 3rem;
		line-height: 150%;

		@media ${Devices.mobile} {
			${Fonts.medium14}
			padding: 0 1rem;
			/* line-height: 130%; */
		}
	`;

	export const Fold = styled.div`
		border-top: 7.2rem solid ${Colors.blue200};
		border-right: 7.2rem solid ${Colors.blue300};
		position: absolute;
		bottom: 0;
		right: 0;
	`;
}
