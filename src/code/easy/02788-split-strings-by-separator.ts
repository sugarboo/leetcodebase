export function splitWordsBySeparator(words: string[], separator: string): string[] {
  return words.map(word => word.split(separator).filter(Boolean)).flat()
}
