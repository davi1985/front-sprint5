/* globals describe, expect, it */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Product } from '.';

describe('MenuItem component', () => {
  it('should render correctly', () => {
    const imageUrl = 'http://example.com';
    const description = 'Example description';
    const price = '100.00';

    render(
      <Product imageUrl={imageUrl} description={description} price={price} />
    );

    expect(screen.getByText('Example description')).toBeInTheDocument();
  });
});
