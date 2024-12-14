export function sortArrayByParity(nums: number[]): number[] {
  const evens: number[] = []
  const odds: number[] = []

  nums.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num)
    } else {
      odds.push(num)
    }
  })

  return [...evens, ...odds]
}
