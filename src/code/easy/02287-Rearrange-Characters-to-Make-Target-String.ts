export function rearrangeCharacters(s: string, target: string): number {
  const targetFreq = new Map<string, number>()
  for (const letter of target) {
    targetFreq.set(letter, (targetFreq.get(letter) ?? 0) + 1)
  }

  const freq = new Map<string, number>()
  for (const letter of s) {
    if (targetFreq.has(letter)) {
      freq.set(letter, (freq.get(letter) ?? 0) + 1)
    }
  }

  const ans: number[] = []
  for (const [letter, count] of targetFreq.entries()) {
    ans.push(Math.floor((freq.get(letter) ?? 0) / count))
  }

  return ans.length ? Math.min(...ans) : 0
}
