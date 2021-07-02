import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	img {
		max-width: 200px;
		margin-bottom: 1rem;
	}

	span {
		padding: 1rem;
		font-size: 1.5rem;
	}

	a {
		color: inherit;
		padding: 1rem;
		background-color: #ddd;
		margin-bottom: 0.5rem;
		border-radius: 0.25rem;
		transition: filter 0.3s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;
