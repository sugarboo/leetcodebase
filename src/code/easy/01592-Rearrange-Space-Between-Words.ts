export function reorderSpaces(text: string): string {
  // Extract words and spaces.
  const words = text.split(/\s+/).filter(Boolean)
  const spaces = text.length - words.join('').length
  // Calculate space and rest spaces.
  let space = Math.floor(spaces / (words.length - 1)) || 0
  let rest = spaces % (words.length - 1) || 0

  // If there is only one word, put all spaces at the end.
  if (space > 0 && words.length === 1) {
    space = 0
    rest = spaces
  }

  // Join words with spaces and rest spaces.
  return words.join(' '.repeat(space)) + ' '.repeat(rest)
}
