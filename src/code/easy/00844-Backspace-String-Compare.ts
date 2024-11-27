export function backspaceCompare(s: string, t: string): boolean {
  // To find the next valid character index in the string backwardly
  const getNextValidIndex = (str: string, index: number): number => {
    let backspaceCount = 0
    while (index >= 0) {
      if (str[index] === '#') {
        backspaceCount++
      } else if (backspaceCount > 0) {
        backspaceCount--
      } else {
        break
      }
      index--
    }
    return index
  }

  let i = s.length - 1
  let j = t.length - 1

  while (i >= 0 || j >= 0) {
    i = getNextValidIndex(s, i)
    j = getNextValidIndex(t, j)

    // Characters do not match
    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false
    }

    if ((i >= 0) !== (j >= 0)) {
      // One string has more valid characters than the other
      return false
    }

    i--
    j--
  }

  // Both strings are equivalent
  return true
}
