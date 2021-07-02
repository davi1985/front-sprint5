import styled from 'styled-components';

export const Container = styled.div`
	margin-bottom: 16px;
	display: flex;
	margin: 0 auto;
	width: 80%;
	max-width: 1100px;
	padding: 16px;

	ol {
		display: flex;
	}

	@media (max-width: 1200px) {
		.main__breadcrumbs .breadcrumbs__list {
			justify-content: center;
		}
	}
`;
