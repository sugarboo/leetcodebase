export function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b)
  const result: number[][] = []
  let minDiff = Infinity
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i]
    if (diff < minDiff) {
      minDiff = diff
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === minDiff) {
      result.push([arr[i], arr[i + 1]])
    }
  }
  return result
}
