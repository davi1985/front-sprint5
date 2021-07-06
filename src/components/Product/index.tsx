import { currencyFormatter } from '../../utils/currencyFormatter';
import { Card, Container } from './styles';

export type ProductType = {
  sku: string;
  image: string;
  name: string;
  price: string;
};

export function Product({ image, name, price }: ProductType) {
  return (
    <Container>
      <Card>
        <img src={image} alt="" />
        <p>{name}</p>
        <span>{currencyFormatter(price)}</span>
      </Card>
    </Container>
  );
}
