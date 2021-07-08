import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { FilterItem } from '.';

describe('FilterItem component', () => {
  it('should render correctly', () => {
    const label = 'Item';
    const id = 'name';

    render(<FilterItem label={label} id={id} />);

    expect(screen.getByText('Item')).toBeInTheDocument();
  });
});
