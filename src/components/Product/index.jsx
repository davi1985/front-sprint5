import { currencyFormatter } from '../../utils/currencyFormatter';
import { Card, Container } from './styles';

export function Product({ imageUrl, description, price }) {
  return (
    <Container>
      <Card>
        <img src={imageUrl} alt="" />
        <p>{description}</p>
        <span>{currencyFormatter(price)}</span>
      </Card>
    </Container>
  );
}
