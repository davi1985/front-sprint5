/* globals describe, expect, it */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Product } from '.';

describe('Product Page component', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter initiaValue="/products/1">
        <Product />
      </MemoryRouter>,
    );

    expect(screen.getByText('Adicionar à sacola')).toBeInTheDocument();
  });
});
