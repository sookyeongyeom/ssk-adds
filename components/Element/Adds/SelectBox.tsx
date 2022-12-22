import styled from 'styled-components';
import { SelectBoxProps } from '../../../@types/shared';
import { Colors } from '../../../styles/colors';
import { Fonts } from '../../../styles/fonts';
import { svgDown12 } from '../../../styles/svgs';

export default function SelectBox({ options }: SelectBoxProps) {
	return (
		<S.SelectBoxLayout>
			<select>{options && options.map((option, i) => <option key={i}>{option}</option>)}</select>
			<div>{svgDown12}</div>
		</S.SelectBoxLayout>
	);
}

namespace S {
	export const SelectBoxLayout = styled.div`
		width: fit-content;
		align-self: center;
		position: relative;
		top: 0.2rem;

		> select {
			${Fonts.regular14}
			align-self: center;
			width: 11.6rem;
			padding: 0.5rem 0.8rem;
			border-radius: 0;
			border: 0.1rem solid ${Colors.gray150};
			color: ${Colors.gray300};
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
		}

		> div {
			position: absolute;
			right: 1rem;
			top: 50%;
			transform: translateY(-50%);
			display: flex;
			align-items: center;
		}
	`;
}
