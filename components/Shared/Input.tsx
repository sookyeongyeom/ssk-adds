import styled from 'styled-components';
import { InputProps } from '../../@types/shared';
import { Colors } from '../../styles/colors';

export default function Input({ label, value, onChange }: InputProps) {
	return (
		<S.InputLayout>
			<p>{label}</p>
			<input value={value} onChange={onChange} />
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
			border: 0.1rem solid ${Colors.gray150};
		}
	`;
}
