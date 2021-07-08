import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Product } from '.';

describe('MenuItem component', () => {
  it('should render correctly', () => {
    const imageUrl = 'http://example.com';
    const description = 'Example description';
    const price = '100.00';
    const sku = '1';

    render(
      <Product sku={sku} image={imageUrl} name={description} price={price} />,
    );

    expect(screen.getByText('Example description')).toBeInTheDocument();
  });
});
