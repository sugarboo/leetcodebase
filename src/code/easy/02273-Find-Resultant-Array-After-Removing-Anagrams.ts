export function removeAnagrams(words: string[]): string[] {
  // Helper function to check if two strings are anagrams
  const isAnagram = (a: string, b: string) => {
    a = a.split('').sort().join()
    b = b.split('').sort().join()

    return a === b
  }

  const ans: string[] = []

  // Initialize prev and ans with the first word
  let prev = words[0]
  ans.push(prev)

  for (let i = 1; i < words.length; i++) {
    const curr = words[i]
    // If adjacent words are not anagrams
    if (!isAnagram(prev, curr)) {
      // Add curr to ans
      ans.push(curr)
      // Update prev
      prev = curr
    }
  }

  return ans
}
