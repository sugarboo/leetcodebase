export function numberOfPairs(nums: number[]): number[] {
  const freq = new Map<number, number>()
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1)
  }

  let pair = 0
  let leftover = 0
  for (const [_num, cnt] of freq) {
    pair += Math.floor(cnt / 2)
    if (cnt % 2 !== 0) {
      leftover++
    }
  }

  return [pair, leftover]
}
