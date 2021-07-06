import styled from 'styled-components';

export const Container = styled.div`
	border-top: 1px solid #e3e3e3;
	border-bottom: 1px solid #e3e3e3;
	display: flex;

	@media (max-width: 1200px) {
		.main__filters {
			display: none;
		}
	}
`;

export const List = styled.ul`
	display: flex;
`;
