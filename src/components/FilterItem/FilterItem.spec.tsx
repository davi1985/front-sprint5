/* globals describe, expect, it */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { FilterItem } from '.';

describe('FilterItem component', () => {
  it('should render correctly', () => {
    const label = 'Item';

    render(<FilterItem label={label} />);

    expect(screen.getByText('Item')).toBeInTheDocument();
  });
});
