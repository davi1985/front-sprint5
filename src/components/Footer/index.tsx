import {
  Container,
  Button,
  ListItem,
  Form,
  CompanyTitle,
  CompanyItem,
  FooterPayment,
  PaymentContainer,
  PaymentTitle,
  PaymentAcessibility,
  PaymentSocial,
  SocialIcons,
  SocialIconsContent,
} from './styles';

export function Footer(): JSX.Element {
  return (
    <Container className="footer">
      <section className="footer__contact">
        <div className="footer__container contact">
          <p className="contact__info">Receba ofertas e novidades por e-mail</p>

          <Form action="/">
            <input
              className="contact__input"
              type="email"
              placeholder="Digite aqui seu e-mail"
            />
            <Button type="submit">
              <span>Cadastrar</span>
            </Button>
          </Form>

          <p className="contact__msg-app">Baixe nosso App</p>

          <div className="apps">
            <a href="#url">
              <img
                className="apps__img"
                src="assets/google-play.webp"
                alt="Google Play"
              />
            </a>
            <a href="#url">
              <img
                className="apps__img"
                src="assets/app-store.webp"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="footer__links links">
        <div className="footer__container links">
          <div className="links__contacts">
            <ListItem>
              <a href="#url" className="contact-icon">
                <img
                  className="contact-icon__img"
                  src="assets/ico-attendance.svg"
                  alt="Atendimento"
                />
                <p className="contact-icon__text">Atendimento</p>
              </a>

              <a href="#url" className="contact-icon">
                <img
                  className="contact-icon__img"
                  src="assets/ico-faq.svg"
                  alt="Perguntas Frequentes"
                />
                <p className="contact-icon__text">Perguntas Frequentes</p>
              </a>
            </ListItem>

            <ListItem>
              <a href="#url" className="contact-icon">
                <img
                  className="contact-icon__img"
                  src="assets/ico-invoice-and-statement.svg"
                  alt="Fatura e Extrato"
                />
                <p className="contact-icon__text">Fatura e Extrato</p>
              </a>
              <a href="#url" className="contact-icon">
                <img
                  className="contact-icon__img"
                  src="assets/ico-work-with-us.svg"
                  alt="Trabalhe Conosco"
                />
                <p className="contact-icon__text">Trabalhe Conosco</p>
              </a>
            </ListItem>
          </div>
          <hr className="links__separator" />
          <ul className="links__companies company-links">
            <li className="company-links">
              <CompanyTitle>Cartão Riachuelo</CompanyTitle>
              <ul>
                <CompanyItem>
                  <a href="#url">Midway Financeira</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Saiba como adquirir</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Veja sua fatura e extrato</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Buscando quitar suas dívidas?</a>
                </CompanyItem>
              </ul>
            </li>
            <li className="company-links">
              <CompanyTitle>Sobre a Riachuelo</CompanyTitle>
              <ul>
                <CompanyItem>
                  <a href="#url">A Empresa</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Portal de Fornecedores</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Relação com Investidores</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Assessoria de Imprensa</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Trabalhe Conosco</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Programa Jovem Aprendiz</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Cadastro de Startups</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url"> Mapa do Site </a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url"> Guide Shop </a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Venda na Riachuelo Marketplace</a>
                </CompanyItem>
              </ul>
            </li>
            <li className="company-links">
              <CompanyTitle>Moda que Transforma</CompanyTitle>
              <ul>
                <CompanyItem>
                  <a href="#url">Na prática</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Entre Costuras</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Jeans Mais Transparente</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Ações Covid-19</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Free Free</a>
                </CompanyItem>
              </ul>
            </li>
            <li className="company-links">
              <CompanyTitle>Ajuda</CompanyTitle>
              <ul>
                <CompanyItem>
                  <a href="#url">Atendimento</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Perguntas Frequentes</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Trocas e Devoluções</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Portal da Privacidade</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Política de Privacidade</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Termos e Condições de Uso</a>
                </CompanyItem>
                <CompanyItem>
                  <a href="#url">Regras e Resultados de Sorteios</a>
                </CompanyItem>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <FooterPayment>
        <PaymentContainer className="footer__container payment">
          <div className="payment__alternatives">
            <PaymentTitle className="payment__title">
              Formas de Pagamento
            </PaymentTitle>
            <img
              className="payment__img"
              src="../../assets/images/ico-cartao-rchlo1.webp"
              alt=""
            />
            <img
              className="payment__img"
              src="assets/ico-cartao-rchlo2.webp"
              alt=""
            />
            <img
              className="payment__img"
              src="assets/ico-cartao-rchlo3.webp"
              alt=""
            />
            <img
              className="payment__img"
              src="assets/ico-cartao-visa.png"
              alt=""
            />
            <img
              className="payment__img"
              src="assets/ico-cartao-master.webp"
              alt=""
            />
            <img
              className="payment__img"
              src="assets/ico-cartao-amex.webp"
              alt=""
            />
            <img
              className="payment__img"
              src="assets/ico-cartao-diners.png"
              alt=""
            />
            <img
              className="payment__img"
              src="assets/ico-cartao-elo.png"
              alt=""
            />
            <img className="payment__img" src="assets/ico-boleto.webp" alt="" />
            <img className="payment__img" src="assets/ico-paypal.png" alt="" />
          </div>
          <PaymentSocial className="payment__social">
            <PaymentTitle className="payment__title">
              Siga a Riachuelo
            </PaymentTitle>
            <SocialIcons>
              <SocialIconsContent>
                <a href="#url">
                  <img
                    className="icon__img"
                    src="assets/ico-facebook.svg"
                    alt=""
                  />
                </a>
              </SocialIconsContent>

              <SocialIconsContent>
                <a href="#url">
                  <img
                    className="icon__img"
                    src="assets/ico-instagram.svg"
                    alt=""
                  />
                </a>
                <p className="icon__text">RCHLO</p>
              </SocialIconsContent>

              <SocialIconsContent>
                <a href="#url">
                  <img
                    className="icon__img"
                    src="assets/ico-instagram.svg"
                    alt=""
                  />
                </a>
                <p className="icon__text">CASA RCHLO</p>
              </SocialIconsContent>

              <SocialIconsContent>
                <a href="#url">
                  <img
                    className="icon__img"
                    src="assets/ico-pinterest.svg"
                    alt=""
                  />
                </a>
              </SocialIconsContent>
              <SocialIconsContent>
                <a href="#url">
                  <img
                    className="icon__img"
                    src="assets/ico-twitter.svg"
                    alt=""
                  />
                </a>
              </SocialIconsContent>
              <SocialIconsContent className="social__icon icon">
                <a href="#url">
                  <img
                    className="icon__img"
                    src="assets/ico-youtube.svg"
                    alt=""
                  />
                </a>
              </SocialIconsContent>
              <SocialIconsContent className="social__icon icon">
                <a href="#url">
                  <img
                    className="icon__img"
                    src="assets/ico-linkedin.svg"
                    alt=""
                  />
                </a>
              </SocialIconsContent>
            </SocialIcons>
          </PaymentSocial>
          <PaymentAcessibility>
            <PaymentTitle>Acessibilidade</PaymentTitle>
            <img src="assets/ico-a11y.webp" alt="" />
          </PaymentAcessibility>
        </PaymentContainer>
      </FooterPayment>

      <section className="footer__bottom">
        <div className="footer__container bottom">
          <div className="copyright">
            <p className="copyright__text">
              © Copyright 2017 - 2019. Todos os direitos reservados. Lojas
              Riachuelo S/A. Rua Landri Sales, 1.070, G02 Anexo B, Guarulhos -
              SP - Brasil
              <br />
              CEP 07250-130 CNPJ 33.200.056/0441-97 | IE 796.420.926.112 | SAC
              4003-0515.Direção de fotografia de produtos por Adriano Adrião.
              <br />
              Pagamento com Cartão Riachuelo, parcelas mínimas de R$ 15,00. Para
              os demais cartões Visa, Mastercard, Elo, Diners, Hipercard e
              American Express, parcelas mínimas de R$ 30,00.
              <br />
              * COMPRE NO SITE e RETIRE NA LOJA com FRETE GRÁTIS, conforme lojas
              participantes. Consulte as lojas participantes nas opções de frete
              do seu pedido, conforme CEP de entrega cadastrado.
              <br />
              Frete único de R$ 4,99 para Sul e Sudeste em compras a partir de
              R$ 129,00. Demais regiões o valor estará sujeito a variações.
              Condição por tempo indeterminado, para tipo de entrega “normal”.
              <br />
              Preços, promoções, condições de pagamento, valores de frete e
              disponibilidade de estoque são aplicados somente nas compras
              efetuadas na loja online Riachuelo. Existe uma limitação de peças
              iguais no mesmo pedido que muda de acordo com o tipo de produto.
              <br />
              Em caso de divergência de valores entre a página do produto e a
              Sacola de Compras, a Riachuelo se reserva a garantir o valor
              exibido na Sacola de Compras.
            </p>
          </div>
          <div className="copyright__stamp">
            <img src="assets/ra1000.webp" alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
}
