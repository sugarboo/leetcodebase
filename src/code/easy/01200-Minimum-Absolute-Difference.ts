export function minimumAbsDifference(arr: number[]): number[][] {
  const ans: number[][] = []
  arr.sort((a, b) => a - b)
  let minDiff = Infinity
  for (let i = 0; i < arr.length - 1; i++) {
    const x = arr[i]
    const y = arr[i + 1]
    const diff = y - x
    if (diff < minDiff) {
      ans.length = 0
      minDiff = diff
      ans.push([x, y])
    } else if (diff === minDiff) {
      ans.push([x, y])
    }
  }
  return ans
}
