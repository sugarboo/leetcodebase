export function twoEditWords(queries: string[], dictionary: string[]): string[] {
  const ans: string[] = []
  for (const query of queries) {
    for (const word of dictionary) {
      let diff = 0
      for (let i = 0; i < word.length; i++) {
        if (query[i] !== word[i]) {
          diff++
        }
      }
      if (diff <= 2) {
        ans.push(query)
        break
      }
    }
  }

  return ans
}
