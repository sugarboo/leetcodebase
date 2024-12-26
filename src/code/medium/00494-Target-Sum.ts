export function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length
  const memo = new Map<string, number>()

  function dfs(i: number, sum: number): number {
    if (i === n) {
      return sum === target ? 1 : 0
    }
    const key = `${i},${sum}`
    if (memo.has(key)) {
      return memo.get(key)!
    }
    const result = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i])
    memo.set(key, result)
    return result
  }
  return dfs(0, 0)
}
