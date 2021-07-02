/* globals describe, expect, it */
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import { Footer } from '.';

describe('Filters component', () => {
	it('should render correctly', () => {
		const { container } = render(<Footer />);

		expect(container.firstChild).toHaveClass('footer');
	});
});
