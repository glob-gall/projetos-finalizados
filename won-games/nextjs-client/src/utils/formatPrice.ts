export default function formatPrice(number: number | bigint): string {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
}
