export function oddString(words: string[]): string {
  const diffs: Map<string, string[]> = new Map()
  for (const word of words) {
    const diff: number[] = []
    for (let i = 0; i < word.length - 1; i++) {
      diff.push(word[i].charCodeAt(0) - word[i + 1].charCodeAt(0))
    }
    const key = diff.join('')
    if (!diffs.has(key)) {
      diffs.set(key, [])
    }
    diffs.get(key)!.push(word)
  }
  for (const [_, diff] of diffs) {
    if (diff.length === 1) {
      return diff[0]
    }
  }
  return ''
}
