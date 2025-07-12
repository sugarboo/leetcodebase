export function checkIfPangram(sentence: string): boolean {
  const set = new Set(sentence)

  return set.size >= 26
}