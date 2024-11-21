export function shortestCompletingWord(licensePlate: string, words: string[]): string {
  // Extract all letters from the licensePlate, ignoring numbers and spaces
  const letters: string[] = licensePlate
    .toLocaleLowerCase()
    .replaceAll(/[0-9\s]/g, '')
    .split('')

  // Create a copy of the words array to modify during processing
  const targets = [...words]
  for (let i = 0; i < targets.length; i++) {
    // For each letter in the licensePlate, remove it from the current word in targets
    letters.forEach((letter) => {
      // Replace one occurrence of the letter
      targets[i] = targets[i].replace(letter, '')
    })
  }

  // Calculate the length difference between the original word and the modified word
  const lengths = words.map((word, i) => {
    if (word.length - targets[i].length === letters.length) {
      // If the length difference matches the number of required letters, this word is valid
      return word.length
    } else {
      // Assign a high value to invalid words to exclude them
      return Number.MAX_SAFE_INTEGER
    }
  })

  // Find the index of the word with the smallest length
  const index = lengths.indexOf(Math.min(...lengths))

  // Return the shortest valid word
  return words[index]
}
