export function currencyFormatter(amout) {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(amout?.replace(',', '.'));
}
