export function numDifferentIntegers(word: string): number {
  const nums = word.match(/\d+/g) as string[]

  return nums ? new Set(nums.map(BigInt)).size : 0
}
