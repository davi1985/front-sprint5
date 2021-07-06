/* globals describe, expect, it */

import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { BreadcrumbItem } from '.';

describe('BreadcrumbItem component', () => {
  it('should render correctly', () => {
    const link = 'http://example.com';
    const label = 'Home';
    const active = 'true';

    render(<BreadcrumbItem link={link} label={label} active={active} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should receive classname correctly', () => {
    const link = 'http://example.com';
    const label = 'Home';
    const active = 'true';

    const { container } = render(
      <BreadcrumbItem link={link} label={label} active={active} />,
    );

    expect(container.firstChild).toHaveClass('breadcrumbs__item--active');
  });
});
