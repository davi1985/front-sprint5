import { Link } from 'react-router-dom';

import { Container } from './styles';
import notFound from '../../assets/icons/error-404.svg';

export function NotFound(): JSX.Element {
  return (
    <Container>
      <img src={notFound} alt="Página não encontrada" />
      <span>Página não encontrada!</span>

      <Link to="/">Voltar a página inicial.</Link>
    </Container>
  );
}
