export function uncommonFromSentences(s1: string, s2: string): string[] {
  const words: string[] = [...s1.split(' '), ...s2.split(' ')]
  return words.filter(word => words.indexOf(word) === words.lastIndexOf(word))
}