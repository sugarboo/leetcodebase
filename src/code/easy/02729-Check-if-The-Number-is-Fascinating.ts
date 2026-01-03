export function isFascinating(n: number): boolean {
  const str = `${n}${2 * n}${3 * n}`
  const set = new Set(Array.from(str))
  return !set.has('0') && str.length === 9 && set.size === 9
}
