import { Link } from "react-router-dom";
import { Product, ProductType } from "../Product";

import { Section } from "./styles";

type ProductsProps = {
  products: Array<ProductType>;
  productsFiltered: Array<ProductType>;
};

export function ProductsList({ products, productsFiltered }: ProductsProps) {
  return (
    <Section className="main__products">
      <ol className="products__list">
        {productsFiltered.length > 0
          ? productsFiltered.map((product) => (
            <Link to={`/products/${product.sku}`} key={product.sku}>
              <Product
                sku={product.sku}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            </Link>
          ))
          : products.map((product) => (
            <Link to={`/products/${product.sku}`} key={product.sku}>
              <Product
                sku={product.sku}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            </Link>
          ))}
      </ol>
    </Section>
  );
}
