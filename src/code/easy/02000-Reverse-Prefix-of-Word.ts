export function reversePrefix(word: string, ch: string): string {
  const idx = word.indexOf(ch)

  if (idx === -1) {
    return word
  }

  let ans = word.slice(idx + 1)
  for (let i = 0; i <= idx; i++) {
    ans = `${word[i]}${ans}`
  }

  return ans
}
