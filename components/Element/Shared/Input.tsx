import styled from 'styled-components';
import { InputProps } from '../../../@types/shared';
import { Colors } from '../../../styles/colors';

export default function Input({
	label,
	value,
	type,
	inputRef,
	placeholder,
	onChange,
	maxLength,
	minLength,
}: InputProps) {
	return (
		<S.InputLayout>
			<p>{label}</p>
			<input
				value={value}
				onChange={onChange}
				type={type}
				ref={inputRef}
				placeholder={placeholder}
				maxLength={maxLength}
				minLength={minLength}
			/>
		</S.InputLayout>
	);
}

namespace S {
	export const InputLayout = styled.div`
		> input {
			background-color: ${Colors.white};
			display: block;
			width: 30rem;
			padding: 1rem;
			border: 0.15rem solid ${Colors.gray150};
			border-radius: 0.6rem;
			transition: 0.3s ease;

			&:hover,
			&:focus {
				border-color: ${Colors.orange300};
			}

			&:focus {
				background-color: ${Colors.orange100};
			}
		}
	`;
}
