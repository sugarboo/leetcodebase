export function triangleType(nums: number[]): string {
  nums.sort((a, b) => a - b)
  const [a, b, c] = nums
  if (a + b > c) {
    const uniquesCount = Array.from(new Set(nums)).length
    switch (uniquesCount) {
      case 1: {
        return 'equilateral'
      }
      case 2: {
        return 'isosceles'
      }
      case 3:
      default: {
        return 'scalene'
      }
    }
  } else {
    return 'none'
  }
}