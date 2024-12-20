export function isAlienSorted(words: string[], order: string): boolean {
  const orderMap = new Map<string, number>()
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i)
  }

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i]
    const word2 = words[i + 1]
    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (orderMap.get(word1[j])! > orderMap.get(word2[j])!) {
        return false
      }
      if (orderMap.get(word1[j])! < orderMap.get(word2[j])!) {
        break
      }
      if (j === word2.length - 1 && word1.length > word2.length) {
        return false
      }
    }
  }

  return true
}
