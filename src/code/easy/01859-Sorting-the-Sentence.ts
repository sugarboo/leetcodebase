export function sortSentence(s: string): string {
  const words = s.split(' ')

  words.sort((a, b) => Number(a[a.length - 1]) - Number(b[b.length - 1]))

  return words.map(word => word.slice(0, -1)).join(' ')
}
