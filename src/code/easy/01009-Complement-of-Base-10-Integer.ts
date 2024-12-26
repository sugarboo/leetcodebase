export function bitwiseComplement(n: number): number {
  const binary = n.toString(2)
  const complement = binary.split('').map(bit => (bit === '0' ? '1' : '0')).join('')

  return Number.parseInt(complement, 2)
}
