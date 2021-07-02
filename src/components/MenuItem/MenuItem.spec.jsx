/* globals describe, expect, it */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { MenuItem } from '.';

describe('MenuItem component', () => {
	it('should render correctly', () => {
		const label = 'Item';
		const link = 'http://example.com';

		render(<MenuItem label={label} link={link} />);

		expect(screen.getByText('Item')).toBeInTheDocument();
	});
});
