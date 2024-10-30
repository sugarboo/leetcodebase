export function findWords(words: string[]): string[] {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ]

  const ans: string[] = []

  words.forEach((word) => {
    const letters = word.toLocaleLowerCase().split('')
    for (let i = 0; i < rows.length; i++) {
      if (letters.every(letter => rows[i].includes(letter))) {
        ans.push(word)
      }
    }
  })

  return ans
}
