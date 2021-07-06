/* globals describe, expect, it */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Mobile } from '.';

describe('Mobile component', () => {
	it('should render correctly', () => {
		render(<Mobile />);

		expect(screen.getByTestId('mobile-test')).toBeInTheDocument();
	});
});
