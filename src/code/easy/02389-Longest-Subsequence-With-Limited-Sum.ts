export function answerQueries(nums: number[], queries: number[]): number[] {
  const n = nums.length
  const m = queries.length
  nums.sort((a, b) => a - b)
  const prefixSums = Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefixSums[i + 1] = prefixSums[i] + nums[i]
  }
  const ans = Array(queries.length).fill(0)

  for (let i = 0; i < m; i++) {
    ans[i] = binarySearch(prefixSums, queries[i]) - 1
  }

  return ans
}

function binarySearch(arr: number[], target: number) {
  let low = 1
  let high = arr.length
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2)
    if (arr[mid] > target) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return low
}
