import styled from 'styled-components';

export const Section = styled.section`
	margin-top: 20px;
	margin-bottom: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	.products__list {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		list-style: none;
	}

	@media (max-width: 1200px) {
		.products__list {
			flex-wrap: wrap;
		}
	}

	@media (max-width: 600px) {
		.products__list {
			flex-direction: column;
		}
	}
`;
