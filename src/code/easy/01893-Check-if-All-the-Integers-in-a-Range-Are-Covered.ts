export function isCovered(ranges: number[][], left: number, right: number): boolean {
  return isCovered2(ranges, left, right)
}

function isCovered1(ranges: number[][], left: number, right: number): boolean {
  const map = new Map<number, boolean>()
  for (const [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
      map.set(i, true)
    }
  }

  for (let i = left; i <= right; i++) {
    if (!map.has(i)) {
      return false
    }
  }

  return true
}

function isCovered2(ranges: number[][], left: number, right: number): boolean {
  // Difference array for 50 numbers
  const diff = Array.from({ length: 51 }, () => 0)

  // Increment the difference at the start of the range and decrement the difference at the end of the range
  for (const [start, end] of ranges) {
    diff[start]++
    diff[end + 1]--
  }

  // Prefix sum to check if the range is covered
  let prefixSum = 0
  for (let i = 1; i <= 50; i++) {
    prefixSum += diff[i]
    // If the prefix sum is less than 0, it means the range is not covered
    if (i >= left && i <= right && prefixSum <= 0) {
      return false
    }
  }

  return true
}
