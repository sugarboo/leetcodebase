export function generateTheString(n: number): string {
  return 'a'.repeat(n - 1) + 'ba'.substring(n % 2, n % 2 + 1)
}
