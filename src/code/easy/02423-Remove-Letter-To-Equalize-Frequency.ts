export function equalFrequency(word: string): boolean {
  const letterCnt = Array(26).fill(0)
  const base = 'a'.charCodeAt(0)
  for (const letter of word) {
    letterCnt[letter.charCodeAt(0) - base]++
  }
  const freq = new Map<number, number>()
  for (const cnt of letterCnt) {
    if (cnt > 0) {
      freq.set(cnt, (freq.get(cnt) ?? 0) + 1)
    }
  }
  for (const cnt of letterCnt) {
    if (cnt === 0) {
      continue
    }
    freq.set(cnt, freq.get(cnt)! - 1)
    if (freq.get(cnt) === 0) {
      freq.delete(cnt)
    }
    if (cnt - 1 > 0) {
      freq.set(cnt - 1, (freq.get(cnt - 1) ?? 0) + 1)
    }
    if (freq.size === 1) {
      return true
    }
    if (cnt - 1 > 0) {
      freq.set(cnt - 1, freq.get(cnt - 1)! - 1)
      if (freq.get(cnt - 1) === 0) {
        freq.delete(cnt - 1)
      }
    }
    freq.set(cnt, (freq.get(cnt) ?? 0) + 1)
  }
  return false
}
