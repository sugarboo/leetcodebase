function bitCount(n: number) {
  return n.toString(2).split('0').join('').length
}

export function canSortArray(nums: number[]): boolean {
  // Avoid modifying the input directly
  const values = [...nums]
  const n = values.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (values[j] <= values[j + 1]) {
        // No swap needed
        continue
      } else {
        if (bitCount(values[j]) === bitCount(values[j + 1])) {
          [values[j], values[j + 1]] = [values[j + 1], values[j]]
        } else {
          return false
        }
      }
    }
  }
  return true
}
