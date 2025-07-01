export function possibleStringCount(word: string): number {
  // Initialize the answer to 1 because the inputted word is always a possible string
  let ans = 1

  // Iterate through the word and check if the current letter is the same as the previous letter
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      // If the current letter is the same as the previous letter, increment the answer
      ans++
    }
  }

  return ans
}
