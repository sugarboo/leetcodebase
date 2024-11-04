export function compressedString(word: string): string {
  let comp = ''
  // pos tracks our position in the input string
  let pos = 0

  // Process until we reach end of string
  while (pos < word.length) {
    let consecutiveCount = 0
    const currentChar = word.charAt(pos)

    // Count the consecutive occurrences (maximum 9)
    while (
      pos < word.length
      && consecutiveCount < 9
      && word.charAt(pos) === currentChar
    ) {
      consecutiveCount++
      pos++
    }

    // Append count followed by character to result
    comp += `${consecutiveCount}${currentChar}`
  }

  return comp
}
