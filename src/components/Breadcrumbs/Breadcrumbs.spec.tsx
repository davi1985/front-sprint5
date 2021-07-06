import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Breadcrumbs } from '.';

describe('Breadcrumbs component', () => {
  it('should render correctly', () => {
    const breadcrumbs = [
      { id: 1, link: '#home', label: 'Home', active: false },
      { id: 2, link: '#home', label: 'Infantil', active: false },
      { id: 3, link: '#home', label: 'Personagens', active: true },
    ];

    render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

    expect(screen.getByText('Personagens')).toBeInTheDocument();
  });
});
