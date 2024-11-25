export function mostCommonWord(paragraph: string, banned: string[]): string {
  const words = paragraph.toLocaleLowerCase().split(/\W+/g)

  const map: Record<string, number> = {}

  const bannedSet = new Set(banned)

  for (const word of words) {
    if (!bannedSet.has(word) && word !== '') {
      map[word] = (map[word] || 0) + 1
    }
  }

  let maxCount = 0
  let frequent = ''

  for (const key in map) {
    if (map[key] > maxCount) {
      maxCount = map[key]
      frequent = key
    }
  }

  return frequent
}
