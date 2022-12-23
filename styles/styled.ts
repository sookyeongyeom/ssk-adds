import styled from 'styled-components';

export namespace SC {
	export const PrevImage = styled.div`
		width: 15rem;
		height: 18rem;

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	`;

	export const Keywords = styled.div`
		display: flex;
		flex-direction: column;
		width: fit-content;
		gap: 0.5rem;
		margin-bottom: 1rem;
	`;

	export const Keyword = styled.input`
		border: 0.1rem solid black;
		padding: 0.5rem;
	`;
}
