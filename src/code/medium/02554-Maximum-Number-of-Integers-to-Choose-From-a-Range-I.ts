export function maxCount(banned: number[], n: number, maxSum: number): number {
  let count = 0

  // Try each number from 1 to n
  for (let num = 1; num <= n; num++) {
    // Skip if number is in banned array
    if (banned.includes(num)) {
      continue
    }

    maxSum -= num

    // Break if sum exceeds our limit
    if (maxSum < 0) {
      break
    }

    count++
  }

  return count
}
