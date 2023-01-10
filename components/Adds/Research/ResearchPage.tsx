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
					'알파 세대의 사회정서 발달(기질, 우울, 불안 등), 가족 내 상호작용, 학교 적응에 대한 양적 설문조사\n\n알파 세대 400명 대상 1~3차년도 연차별 1회 반복 수집'
				}
			/>
			<ResearchBoxElement
				title={'알파 세대 디지털 일상 데이터\n(ADDS-D; Daily)'}
				description={
					'알파 세대의 사회정서 발달(기질, 우울, 불안 등), 가족 내 상호작용, 학교 적응에 대한 양적 설문조사\n\n알파 세대 400명 대상 1~3차년도 연차별 1회 반복 수집'
				}
			/>
			<ResearchBoxElement
				title={
					!isMobile
						? '알파 세대의 사회화 과정에 관한 질적 데이터\n(ADDS-Q; Qualitative)'
						: '알파 세대의 사회화 과정에 관한\n질적 데이터\n(ADDS-Q; Qualitative)'
				}
				description={
					'알파 세대의 부모(1차년도), 교사(2차년도), 알파 세대 본인(3차년도) 대상 심층 인터뷰\n\n알파 세대 청소년과 주요 체계를 대상으로 디지털 일상과 사회화 과정 및 특성, 새로운 이슈에 대한 심층 인터뷰'
				}
			/>
			<ResearchBoxElement
				title={
					!isMobile
						? '알파 세대 일상에 대한 스마트 디바이스 측정\n(ADDS-S; Smart)'
						: '알파 세대 일상에 대한\n스마트 디바이스 측정\n(ADDS-S; Smart)'
				}
				description={
					'스마트 디바이스(스마트 워치)의 전기반응 센서와 행동기반 기술을 활용하여 알파 세대의 운동, 식사, 수면, 디지털 사용을 추적\n\n2차와 3차년도에 200명을 대상으로 1일 3회(아침,점심,저녁) 1주일간 측정'
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
	const [isHover, setIsHover] = useState(false);
	const isMobile = useMobile();

	const onMouseEnter = () => !isMobile && setIsHover(true);
	const onMouseLeave = () => !isMobile && setIsHover(false);
	const onClick = () => isMobile && setIsHover(!isHover);

	useEffect(() => {
		setIsHover(false);
	}, [isMobile]);

	return (
		<S.ResearchBox
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
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
			height: 30rem;
			gap: 2.5rem;
			line-height: 130%;
		}

		@media ${Devices.mobile} {
			padding: 0 2rem;

			/* 생체지표 */
			> div:last-of-type {
				height: 38rem;
			}
		}
	`;

	export const ResearchBox = styled.div<ResearchBoxProps>`
		width: 100%;
		height: 24rem;
		background-image: ${(props) =>
			!props.isHover ? 'url(/assets/pattern_white.png)' : 'url(/assets/pattern_blue.png)'};
		background-repeat: no-repeat;
		background-size: cover;
		transition: 0.3s ease;
		transition-property: background;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		justify-content: center;
		padding: ${(props) => (!props.isHover ? '7rem' : '4.5rem 4.8rem 5.5rem 4.8rem')};
		position: relative;
		box-shadow: ${BoxShadows.smooth};

		@media ${Devices.mobile} {
			padding: ${(props) => (!props.isHover ? '3.9rem' : '3rem')};
			justify-content: ${(props) => props.isHover && 'flex-start'};
			gap: 2rem;
			overflow: scroll;
			height: 26rem;
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

		@media ${Devices.mobile} {
			${Fonts.medium14}
			padding: 0 1rem;
			line-height: 130%;
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
