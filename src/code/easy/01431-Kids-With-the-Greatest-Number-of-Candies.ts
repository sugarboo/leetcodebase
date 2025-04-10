export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const n = candies.length
  const ans = Array<boolean>(n).fill(false)
  const max = Math.max(...candies)

  for (let i = 0; i < n; i++) {
    const totalCandies = candies[i] + extraCandies
    if (totalCandies >= max) {
      ans[i] = true
    }
  }

  return ans
}
