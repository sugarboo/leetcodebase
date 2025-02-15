export function replaceElements(arr: number[]): number[] {
  const n = arr.length
  const ans = Array<number>(n).fill(0)

  let max = -1
  for (let i = n - 1; i >= 0; i--) {
    ans[i] = max
    max = Math.max(max, arr[i])
  }
  return ans
}
