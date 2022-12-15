import { useState, useRef, MutableRefObject, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { BoxShadows } from '../../../styles/shadows';
import { svgDown23 } from '../../../styles/svgs';
import useSlide from '../../../hooks/useSlide';

export default function FAQPage() {
	return (
		<S.FAQPageLayout>
			<FAQBoxElement
				idx={25}
				category={'OOOOOO프로젝트'}
				question={
					'OOOOOO프로젝트에 참여하는 사람입니다.\n하루에 세 번 OOOO을 하라고 안내 받았는데, 놓친 날이 있다면 어떻게 해야할까요?'
				}
				answer={
					'OOOOOO프로젝트에 참여하시는 분들은 하루에 세 번 OOOO을 하시기를 권장드립니다.\n그러나 놓친 날이 있는 경우엔 데일리 설문조사에서 놓친 날짜, 시간에 대한 정보를 꼭 기입해주시기 바랍니다.\n혹시 설문조사에서 쓰지 않은 경우엔 reaiqwhl@yonsei.ac.kr로 연락 주세요.'
				}
			/>
			<FAQBoxElement
				idx={25}
				category={'OOOOOO프로젝트'}
				question={
					'OOOOOO프로젝트에 참여하는 사람입니다.\n하루에 세 번 OOOO을 하라고 안내 받았는데, 놓친 날이 있다면 어떻게 해야할까요?'
				}
				answer={
					'OOOOOO프로젝트에 참여하시는 분들은 하루에 세 번 OOOO을 하시기를 권장드립니다.\n그러나 놓친 날이 있는 경우엔 데일리 설문조사에서 놓친 날짜, 시간에 대한 정보를 꼭 기입해주시기 바랍니다.\n혹시 설문조사에서 쓰지 않은 경우엔 reaiqwhl@yonsei.ac.kr로 연락 주세요.'
				}
			/>
			<FAQBoxElement
				idx={25}
				category={'OOOOOO프로젝트'}
				question={
					'OOOOOO프로젝트에 참여하는 사람입니다.\n하루에 세 번 OOOO을 하라고 안내 받았는데, 놓친 날이 있다면 어떻게 해야할까요?'
				}
				answer={
					'OOOOOO프로젝트에 참여하시는 분들은 하루에 세 번 OOOO을 하시기를 권장드립니다.\n그러나 놓친 날이 있는 경우엔 데일리 설문조사에서 놓친 날짜, 시간에 대한 정보를 꼭 기입해주시기 바랍니다.\n혹시 설문조사에서 쓰지 않은 경우엔 reaiqwhl@yonsei.ac.kr로 연락 주세요.'
				}
			/>
		</S.FAQPageLayout>
	);
}

function FAQBoxElement({ idx, category, question, answer }: FAQBoxElementProps) {
	const [isOpen, setIsOpen] = useState(false);
	const targetRef = useRef() as MutableRefObject<HTMLPreElement>;

	const onToggle = () => setIsOpen(!isOpen);

	useSlide<HTMLPreElement>({ targetRef, isOpen });

	return (
		<S.FAQBox onClick={onToggle} isOpen={isOpen}>
			<h3>
				<S.Accent>Q</S.Accent>
				<S.SemiAccent>{idx}</S.SemiAccent> <span>{category}</span>
			</h3>
			<div>
				<pre>{question}</pre>
				<pre ref={targetRef}>
					<S.Accent>A</S.Accent>
					<p>{answer}</p>
				</pre>
				<div>{svgDown23}</div>
			</div>
		</S.FAQBox>
	);
}

namespace S {
	export const FAQPageLayout = styled.div`
		display: flex;
		flex-direction: column;
		gap: 3rem;
	`;

	export const FAQBox = styled.div<FAQBoxProps>`
		/* 번호 및 분류 */
		> h3 {
			margin-bottom: 1.1rem;
			padding-left: 2rem;

			/* 분류 */
			> span {
				${Fonts.medium14}
			}
		}

		/* 질문 및 답변 박스 */
		> div {
			cursor: pointer;
			box-shadow: ${BoxShadows.smooth};
			border-radius: 1rem;
			padding: 3rem;

			/* 질문 */
			> pre:first-of-type {
				${Fonts.medium18}
				white-space: pre-wrap;
				line-height: 140%;
				margin-bottom: 2.3rem;
			}

			/* 답변 */
			> pre:last-of-type {
				display: flex;
				gap: 1.4rem;

				> p {
					${Fonts.regular18}
					line-height: 140%;
					position: relative;
					top: 0.3rem;
				}
			}

			/* 토글 */
			> pre:last-of-type {
				overflow: hidden;
				margin-bottom: ${(props) => (props.isOpen ? '2.6rem' : '0')};
				transition: 0.3s ease;
			}

			/* 화살표 */
			> div {
				text-align: center;
				transform: ${(props) => (props.isOpen ? 'rotateX(180deg)' : '')};
				transition: 0.5s ease;
			}
		}
	`;

	export const Accent = styled.div`
		${Fonts.bold32}
		font-family: 'Arial';
		color: ${Colors.blue300};
		display: inline-block;
	`;

	export const SemiAccent = styled.div`
		${Fonts.bold28}
		color: ${Colors.blue300};
		display: inline-block;
		margin: 0 0.2rem 0 0.3rem;
	`;
}
