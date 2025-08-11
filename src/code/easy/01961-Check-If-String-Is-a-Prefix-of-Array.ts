export function isPrefixString(s: string, words: string[]): boolean {
  let prefix = ''

  for (const word of words) {
    prefix = `${prefix}${word}`
    if (prefix === s) {
      return true
    }
  }

  return false
}