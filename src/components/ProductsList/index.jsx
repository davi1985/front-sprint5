import { Link } from 'react-router-dom';
import { Product } from '../Product';

import { Section } from './styles';

export function ProductsList({ products, productsFiltered }) {
  return (
    <Section className="main__products">
      <ol className="products__list">
        {productsFiltered.length > 0
          ? productsFiltered.map((product) => (
            <Link to={`/products/${product.sku}`} key={product.sku}>
              <Product
                imageUrl={product.image}
                description={product.name}
                price={product.price}
              />
            </Link>
          ))
          : products.map((product) => (
            <Link to={`/products/${product.sku}`} key={product.sku}>
              <Product
                imageUrl={product.image}
                description={product.name}
                price={product.price}
              />
            </Link>
          ))}
      </ol>
    </Section>
  );
}
