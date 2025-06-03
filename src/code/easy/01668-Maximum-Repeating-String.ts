export function maxRepeating(sequence: string, word: string): number {
  let count = 0

  // Initialize wordGreedy as word
  let wordGreedy = word

  // While sequence includes wordGreedy, increment count and append word to wordGreedy
  while (sequence.includes(wordGreedy)) {
    count++
    wordGreedy += word
  }

  return count
}
