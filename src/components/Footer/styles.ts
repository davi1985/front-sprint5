import styled from 'styled-components';

export const Container = styled.footer`
	border-top: 2px solid lightgray;
	padding-top: 40px;
	width: 100%;

	.footer {
		&__container {
			margin: 0 auto;
			width: 90%;
		}
	}
	.footer__contact .contact {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__info {
			height: 50px;
			line-height: 50px;
			text-transform: uppercase;
			font-size: 0.8125rem;
		}

		&__input {
			height: 24px;
			line-height: 24px;
			border: 0px;
			border-bottom: 1px solid rgba(38, 30, 30, 0.42);
			outline: none;
			width: 300px;
			font-size: 0.9375rem;
			font-weight: 600;
			color: #000;

			&:hover {
				border-bottom: 2px solid #261e1e;
			}

			&:focus-within {
				border-bottom: 2px solid #261e1e;
			}

			&::placeholder {
				font-style: italic;
				opacity: 42%;
				font-weight: 600;
			}
		}

		&__msg-app {
			font-size: 0.9375rem;
			height: 50px;
			line-height: 50px;
			text-transform: uppercase;
		}
	}

	.apps__img {
		width: 110px;
		margin-left: 8px;
	}

	.footer__links {
		background-color: #f6f6f6;
		margin-top: 40px;

		.links {
			display: flex;
		}
	}

	.links__contacts {
		width: 30%;
		display: flex;
	}

	.contact-icon {
		text-align: center;
	}

	.contact-icon__img {
		display: block;
		margin: auto;
		width: 25px;
	}

	.contact-icon__text {
		padding: 8px;
		font-size: 0.8125rem;
		white-space: pre-line;
	}

	.links__companies {
		display: flex;
		width: 60%;
		padding: 50px;
		list-style: none;

		ul {
			list-style: none;
		}
	}

	.links__companies .company-links {
		flex-grow: 1;
		margin-left: 8px;
		margin-right: 8px;
	}

	.links__companies .company-links__item {
		padding-top: 8px;
	}

	.footer__bottom {
		background-color: #f6f6f6;
		padding: 20px 0;

		.bottom {
			display: flex;
		}
		.copyright {
			width: 83.333333%;
		}
		.copyright__text {
			font-size: 0.5625rem;
			font-weight: 400;
			color: #261e1e;
		}
		.copyright__stamp {
			margin: 0 auto;
		}
	}

	@media (max-width: 1200px) {
		.footer__contact .contact {
			flex-direction: column;
		}

		.contact__info {
			font-weight: bold;
		}

		.links {
			flex-direction: column;

			.links__contacts {
				width: 100%;
				.col {
					margin-top: 1rem;

					.contact-icon + .contact-icon {
						margin-top: 2rem;
					}
				}
			}
		}

		.company-links {
			width: 100%;
		}
	}
`;

export const Button = styled.button`
	margin-left: 20px;
	color: rgba(0, 0, 0, 0.26);
	box-shadow: none;
	background-color: rgba(0, 0, 0, 0.12);
	border-radius: 4px;
	border: none;
	padding: 10px 20px 10px 20px;

	span {
		font-size: 0.8125rem;
		text-transform: uppercase;
	}
`;

export const ListItem = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
`;

export const Form = styled.form`
	display: flex;
	/* flex-direction: column; */
	width: 100%;
	max-width: 320px;
	justify-content: center;
	align-items: center;

	.contact__input {
		width: 100%;
	}

	.contact__btn {
		width: 100%;
		margin-top: 1rem;
	}
`;

export const CompanyTitle = styled.h3`
	text-transform: uppercase;
	font-size: 0.875rem;
`;

export const CompanyItem = styled.li`
	line-height: 25px;
	font-size: 0.6875rem;
	font-weight: 400;
	color: black;

	&:hover {
		text-decoration: underline;
	}
`;

export const FooterPayment = styled.section`
	margin-top: 25px;
	margin-bottom: 25px;
`;

export const PaymentContainer = styled.div`
	display: flex;

	.payment__alternatives {
		width: 50%;
	}
	.payment__img {
		margin: 2px;
		width: auto;
	}
`;

export const PaymentTitle = styled.h3`
	text-transform: uppercase;
	margin-bottom: 10px;
`;

export const PaymentAcessibility = styled.div`
	flex-grow: 1;
`;

export const PaymentSocial = styled.div`
	flex-grow: 1;
`;

export const SocialIcons = styled.div`
	display: flex;
`;

export const SocialIconsContent = styled.div`
	width: 50px;

	.icon__img {
		display: block;
		margin: auto;
	}
	.icon__text {
		padding-top: 4px;
		font-size: 0.6875rem;
		font-weight: 300;
		text-align: center;
	}
`;
