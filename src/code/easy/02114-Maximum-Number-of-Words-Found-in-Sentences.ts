export function mostWordsFound(sentences: string[]): number {
  const numberOfWords = sentences.map(sentence => sentence.split(' ').length)

  return Math.max(...numberOfWords)
}
