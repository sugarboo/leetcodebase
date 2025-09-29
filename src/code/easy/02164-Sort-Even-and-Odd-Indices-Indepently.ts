export function sortEvenOdd(nums: number[]): number[] {
  const evens = nums.filter((_, i) => i % 2 === 0).sort((a, b) => a - b)
  const odds = nums.filter((_, i) => i % 2 !== 0).sort((a, b) => b - a)

  const ans: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const pos = Math.floor(i / 2)
    ans.push(i % 2 === 0 ? evens[pos] : odds[pos])
  }

  return ans
}
