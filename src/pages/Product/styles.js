import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 3rem 0;
	max-width: 1200px;
	width: 100%;

	margin: 0 auto;
`;

export const ImageContainer = styled.div`
	margin-right: 1rem;
	width: 100%;
	max-width: 320px;

	img {
		width: 100%;
	}
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	max-width: 520px;
	width: 100%;

	h2 {
		max-width: 420px;
		width: 100%;
		font-size: 1.6875rem;
		white-space: pre-wrap;
		text-align: center;
	}
`;

export const Sizes = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;

	span {
		font-weight: bold;
		font-size: 0.825rem;
	}
`;

export const Card = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 2rem 2rem;
	width: 100%;
	max-width: 420px;
	box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
		0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);

	span {
		color: #d0403d;
		font-size: 1.5rem;
		font-weight: bold;
	}
`;

const colors = {
  red: '#d0403d',
  green: '#008844',
};

export const Button = styled.button`
	padding: 0.8rem 1.1rem;
	width: 100%;
	margin-top: 1rem;
	border: none;
	border-radius: 0.25rem;
	text-transform: uppercase;
	color: white;
	font-size: 1.1rem;

	background: ${({ color }) => (color === 'red' ? colors.red : colors.green)};
	transition: filter 0.3s;

	&:hover {
		filter: brightness(0.9);
	}
`;

export const Size = styled.div`
	display: flex;
	margin-top: 1rem;
`;

export const Span = styled.span`
	cursor: pointer;
	width: 40px;
	height: 40px;
	border: 1px solid #ccc;
	border-radius: 0.25rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #261e1e;
	font-size: 0.6875rem;
	margin-left: 0.5rem;

	&.selected {
		color: white;
		background: #111;
	}
`;
