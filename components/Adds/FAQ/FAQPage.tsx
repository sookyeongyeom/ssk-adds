import { useState, useRef, MutableRefObject, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { BoxShadows } from '../../../styles/shadows';
import { svgDown23 } from '../../../styles/svgs';
import useSlide from '../../../hooks/useSlide';
import { ResponseFAQ } from '../../../@types/api/faq';
import useGet from '../../../hooks/useGet';
import { getFAQ } from '../../../api/faq';
import PageButton from '../../Element/Shared/PageButton';
import useChangePage from '../../../hooks/useChangePage';
import { Sizes } from '../../../styles/sizes';
import { FAQBoxElementProps } from '../../../@types/adds';
import { Devices } from '../../../styles/devices';
import getAscendingIndex from '../../../utils/getAscendingIndex';

export default function FAQPage() {
	const [faqs, setFaqs] = useState<ResponseFAQ.Get>();
	const { page, onChangePage } = useChangePage();

	useEffect(() => {
		useGet(() => getFAQ({ page }), setFaqs);
	}, [page]);

	return (
		<S.FAQPageLayout>
			{faqs &&
				faqs.items.map((faq, i) => (
					<FAQBoxElement
						idx={i + 1}
						category={faq.category}
						question={faq.title}
						answer={faq.reply}
						key={i}
						currentPage={page}
						size={faqs.size}
					/>
				))}
			<div>
				<PageButton
					currentPage={page}
					totalPosts={faqs?.total}
					size={faqs?.size}
					onChangePage={onChangePage}
				/>
			</div>
		</S.FAQPageLayout>
	);
}

function FAQBoxElement({ idx, category, question, answer, currentPage, size }: FAQBoxElementProps) {
	const [isOpen, setIsOpen] = useState(false);
	const targetRef = useRef() as MutableRefObject<HTMLPreElement>;

	const onToggle = () => setIsOpen(!isOpen);

	useSlide<HTMLPreElement>({ targetRef, isOpen });

	return (
		<S.FAQBox isOpen={isOpen}>
			<h3>
				<S.Accent>Q</S.Accent>
				<S.SemiAccent>{getAscendingIndex(currentPage, size, idx)}</S.SemiAccent>{' '}
				<span>{category}</span>
			</h3>
			<div onClick={onToggle}>
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
		gap: 4rem;

		> div:last-of-type {
			margin-top: calc(${Sizes.desktopPageButtonMarginTop} - 4rem);
		}
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

			@media ${Devices.mobile} {
				padding-left: 0.5rem;
			}
		}

		/* 질문 및 답변 박스 */
		> div {
			cursor: pointer;
			box-shadow: ${BoxShadows.smooth};
			border-radius: 1rem;
			padding: 3rem;

			@media ${Devices.mobile} {
				padding: 2.5rem;
			}

			/* 질문 */
			> pre:first-of-type {
				${Fonts.medium18}
				white-space: pre-wrap;
				line-height: 140%;
				margin-bottom: 2.3rem;

				@media ${Devices.mobile} {
					${Fonts.medium16}
					word-break: keep-all;
				}
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

					@media ${Devices.mobile} {
						${Fonts.regular16}
						word-break: keep-all;
					}
				}
			}

			/* 토글 */
			> pre:last-of-type {
				overflow: hidden;
				padding-bottom: 0.2rem;
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
		margin: 0 0.2rem;
	`;
}
