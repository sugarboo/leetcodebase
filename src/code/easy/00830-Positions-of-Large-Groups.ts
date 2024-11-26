export function largeGroupPositions(s: string): number[][] {
  const ans: number[][] = []

  // Start of the current group
  let start = 0

  for (let i = 1; i <= s.length; i++) {
    // Check if the current character is different or we've reached the end of the string
    if (i === s.length || s[i] !== s[start]) {
      // Length of the current group
      const count = i - start
      if (count >= 3) {
        ans.push([start, i - 1])
      }
      // Update start to the next character
      start = i
    }
  }

  return ans
}
