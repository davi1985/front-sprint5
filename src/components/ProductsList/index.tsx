/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';

import { Product, ProductType } from '../Product';
import { Section } from './styles';

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
                name={product.name}
                price={product.price}
              />
            </Link>
          ))
          : // eslint-disable-next-line radar/no-identical-functions
          products.map((product) => (
            <Link to={`/products/${product.sku}`} key={product.sku}>
              <Product
                sku={product.sku}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </Link>
          ))}
      </ol>
    </Section>
  );
}
