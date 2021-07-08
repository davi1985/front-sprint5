import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Filters } from '.';

describe('Filters component', () => {
  it('should render correctly', () => {
    const filters = [
      { id: 'size', label: 'Tamanho' },
      { id: 'color', label: 'Cor' },
      { id: 'department', label: 'Departamento' },
      { id: 'category', label: 'Categoria' },
      { id: 'sleeve', label: 'Manga' },
    ];

    render(<Filters filters={filters} />);

    expect(screen.getByText('Tamanho')).toBeInTheDocument();
  });
});
