export function containsPattern(arr: number[], m: number, k: number): boolean {
  // Initialize a count variable to keep track of the number of times the pattern's individual elements are repeated
  let count = 0

  // Iterate through the array
  for (let i = 0, j = m; i < arr.length - m; i++, j++) {
    if (arr[i] === arr[j]) {
      count++
    } else {
      count = 0
    }

    // If count is equal to m * (k - 1), then the pattern is repeated k times
    if (count === m * (k - 1)) {
      return true
    }
  }

  return false
}
