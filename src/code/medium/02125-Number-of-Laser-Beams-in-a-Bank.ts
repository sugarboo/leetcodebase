export function numberOfBeams(bank: string[]): number {
  let ans = 0
  let last = 0

  for (const row of bank) {
    const cnt = [...row].filter(col => col === '1').length
    if (cnt !== 0) {
      ans += last * cnt
      last = cnt
    }
  }

  return ans
}
