export function countPalindromicSubsequence(s: string): number {
  let ans = 0

  // Unique set of each letter in the string
  const letters = new Set(s)

  // Iterate over each letter
  for (const letter of letters) {
    // Find the first and last index of the letter
    let i = -1
    let j = 0

    for (let k = 0; k < s.length; k++) {
      if (s[k] === letter) {
        if (i === -1) {
          i = k
        }
        j = k
      }
    }

    // Create a set to store unique letters between the first and last index
    const between = new Set<string>()

    // Find all unique letters between the first and last index
    for (let k = i + 1; k < j; k++) {
      between.add(s[k])
    }

    // Add the number of unique letters between the first and last index to the answer
    ans += between.size
  }

  return ans
}
