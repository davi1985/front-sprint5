/* globals describe, expect, it */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Menu } from '.';

describe('Menu component', () => {
	it('should render correctly', () => {
		const menuItems = [
			{ id: 1, label: 'Novidades', link: '#home' },
			{ id: 2, label: 'Feminino', link: '#home' },
			{ id: 3, label: 'Masculino', link: '#home' },
		];

		render(<Menu menuItems={menuItems} />);

		expect(screen.getByText('Feminino')).toBeInTheDocument();
	});
});
