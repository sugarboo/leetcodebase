export function maximumSum(nums: number[]): number {
  // Helper function to calculate the sum of digits of a number
  const sumOfDigits = (num: number): number => {
    let sum = 0
    while (num > 0) {
      sum += num % 10
      num = Math.floor(num / 10)
    }
    return sum
  }

  // Map: digit sum -> array of up to two largest numbers with that digit sum
  const map = new Map<number, number[]>()
  let maxSum = -1

  for (const num of nums) {
    const sum = sumOfDigits(num)
    if (!map.has(sum)) {
      map.set(sum, [num])
    } else {
      const arr = map.get(sum)!
      // Insert the new number in descending order, keeping at most two largest
      if (num > arr[0]) {
        arr.unshift(num)
      } else {
        arr.push(num)
      }
      // Sort descending and keep only the two largest
      arr.sort((a, b) => b - a)
      if (arr.length > 2) {
        arr.pop()
      }
      // map.set(sum, arr)

      if (arr.length >= 2) {
        maxSum = Math.max(maxSum, arr[0] + arr[1])
      }
    }
  }

  return maxSum
}
