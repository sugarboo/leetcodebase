export function decompressRLElist(nums: number[]): number[] {
  const ans: number[] = []

  for (let i = 0; i < nums.length; i += 2) {
    const [freq, val] = nums.slice(i, i + 2)
    ans.push(...Array(freq).fill(val))
  }

  return ans
}
