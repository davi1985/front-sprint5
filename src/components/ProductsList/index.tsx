/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';

import { ProductType } from '../../@types/components/Product';
import { Product } from '../Product';
import { Section } from './styles';

type ProductsProps = {
  products: ProductType[];
  productsFiltered: ProductType[];
};

export function ProductsList({ products, productsFiltered }: ProductsProps): JSX.Element {
  return (
    <Section className="main__products">
      <ol className="products__list">
        {productsFiltered.length > 0
          ? productsFiltered.map((product: ProductType) => (
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
          products.map((product: ProductType) => (
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
