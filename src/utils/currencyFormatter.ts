export function currencyFormatter(amout: any | string) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amout?.replace(',', '.'));
}