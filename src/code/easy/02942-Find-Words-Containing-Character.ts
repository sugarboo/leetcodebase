export function findWordsContaining(words: string[], x: string): number[] {
  return words.flatMap((word, index) => word.includes(x) ? index : [])
}
