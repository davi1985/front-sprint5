/* globals describe, expect, it */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Breadcrumbs } from '.';

describe('Breadcrumbs component', () => {
	it('should render correctly', () => {
		const breadcrumbs = [
			{ id: 1, link: '#home', label: 'Home' },
			{ id: 2, link: '#home', label: 'Infantil' },
			{ id: 3, link: '#home', label: 'Personagens' },
			{ id: 4, label: 'Mario Bros' },
		];

		render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

		expect(screen.getByText('Mario Bros')).toBeInTheDocument();
	});
});
