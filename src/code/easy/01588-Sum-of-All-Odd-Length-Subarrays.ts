export function sumOddLengthSubarrays(arr: number[]): number {
  const sum = (arr: number[]) => {
    return arr.reduce((a, b) => a + b, 0)
  }

  let ans = 0
  const n = arr.length

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const len = j - i + 1
      if (len % 2 !== 0) {
        ans += sum(arr.slice(i, j + 1))
      }
    }
  }

  return ans
}
