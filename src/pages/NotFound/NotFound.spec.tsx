import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { NotFound } from '.';

describe('NotFound component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/bad-route');

    render(
      <Router history={history}>
        <NotFound />
      </Router>,
    );

    expect(screen.getByText('Página não encontrada!')).toBeInTheDocument();
  });
});
