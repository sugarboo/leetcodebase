export function secondHighest(s: string): number {
  const nums = s.split('').map(Number).filter(num => !Number.isNaN(num))
  const desc = Array.from(new Set(nums)).sort((a, b) => b - a)

  return desc.length >= 2 ? desc[1] : -1
}
