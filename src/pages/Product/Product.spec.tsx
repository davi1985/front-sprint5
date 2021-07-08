/* globals describe, expect, it */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { Product } from '.';

describe('Product Page component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/products/1');

    render(
      <Router history={history}>
        <Product />
      </Router>,
    );
    expect(screen.getByText('Adicionar à sacola')).toBeInTheDocument();
  });
});
