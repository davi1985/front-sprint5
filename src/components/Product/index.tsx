import { currencyFormatter } from "../../utils/currencyFormatter";
import { Card, Container } from "./styles";

export type ProductType = {
  sku: string;
  image: string;
  description: string;
  price: string;
};

export function Product({ image, description, price }: ProductType) {
  return (
    <Container>
      <Card>
        <img src={image} alt="" />
        <p>{description}</p>
        <span>{currencyFormatter(price)}</span>
      </Card>
    </Container>
  );
}
