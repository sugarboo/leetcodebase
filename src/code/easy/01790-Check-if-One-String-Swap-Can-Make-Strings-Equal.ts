export function areAlmostEqual(s1: string, s2: string): boolean {
  // If the strings are already equal, return true
  if (s1 === s2) {
    return true
  }

  const diff: number[] = []
  for (let i = 0; i < s1.length; i++) {
    // Find the indices of the characters that are different
    if (s1[i] !== s2[i]) {
      diff.push(i)
    }
    // If there are more than 2 different characters, return false
    if (diff.length > 2) {
      return false
    }
  }

  // If there are exactly 2 different characters, check if they can be swapped to make the strings equal
  return diff.length === 2 && s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]
}
