import styled from 'styled-components';

export const Container = styled.div`
	.header {
		width: 100%;
		padding-bottom: 10px;
		border-bottom: 1px solid #e0e0e0;

		@media (max-width: 1200px) {
			.header--floating {
				position: fixed;
				top: 0;
				background-color: #fff;
			}
		}

		&__container {
			margin: auto;
			width: 95%;
			max-width: 1200px;
		}

		@media (max-width: 1200px) {
			.header__desktop {
				display: none;
			}
		}

		&__mobile {
			display: none;
			margin-bottom: 25px;
		}
		@media (max-width: 1200px) {
			.header__mobile {
				display: flex;
				align-items: center;
			}
		}

		&__logo {
			height: 70px;
			line-height: 70px;
			text-align: center;
		}
		@media (max-width: 1200px) {
			.header__logo {
				flex-grow: 1;
			}
		}

		&__img {
			height: 25px;
			transform: translateY(10px);
		}

		&__search {
			position: relative;
		}

		&__icon {
			width: 24px;
			opacity: 26%;
			top: 13px;
			position: absolute;
			padding-left: 10px;
			color: rgba(0, 0, 0, 0.26);
			line-height: 40px;
		}

		&__input {
			height: 40px;
			width: 100%;
			border-radius: 4px;
			border: 1px solid rgba(0, 0, 0, 0.23);
			padding-left: 40px;

			&:hover {
				border-color: #000;
			}
			&::placeholder {
				font-size: 0.9375rem;
				font-weight: 600;
				font-family: 'Open Sans';
				color: #9b9b9b;
			}
		}

		&__drawer {
			width: 24px;
			opacity: 54%;
			display: none;

			& .menu__title,
			.close__title {
				text-transform: lowercase;
				font-size: 0.5625rem;
				font-weight: 400;
				line-height: 0;
			}
		}

		&__drawer--active {
			display: block;
		}
	}
`;
