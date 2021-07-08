import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Alert } from '.';

describe('Alert component', () => {
  it('should render correctly', () => {
    const alertText = 'Text example';
    const type = true;

    render(<Alert alertText={alertText} type={type} />);

    expect(screen.getByText('Text example')).toBeInTheDocument();
  });
});
