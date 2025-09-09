export function isSameAfterReversals(num: number): boolean {
  if (num === 0) {
    return true
  }

  return !`${num}`.endsWith('0')
}