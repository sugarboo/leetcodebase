export function buddyStrings(s: string, goal: string): boolean {
  // If lengths are not the same, return false
  if (s.length !== goal.length) {
    return false
  }

  // If strings are the same, check for at least one duplicate character
  if (s === goal) {
    const charSet = new Set(s)
    // True if a duplicate exists
    return charSet.size < s.length
  }

  // Find mismatched positions
  const mismatches: number[] = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      mismatches.push(i)
    }
  }

  // There should be exactly 2 mismatched positions
  if (mismatches.length !== 2) {
    return false
  }

  // Check if swapping the mismatched characters makes the strings equal
  const [i, j] = mismatches
  return s[i] === goal[j] && s[j] === goal[i]
}
