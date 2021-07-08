import { ProductType } from '../../@types/components/Product';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { Card, Container } from './styles';

export function Product({ image, name, price }: ProductType): JSX.Element {
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
