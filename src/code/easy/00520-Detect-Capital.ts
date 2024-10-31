export function detectCapitalUse(word: string): boolean {
  if (word === word.toLocaleUpperCase()) {
    return true
  }

  if (word === word.toLocaleLowerCase()) {
    return true
  }

  if (word === `${word[0].toLocaleUpperCase()}${word.slice(1).toLocaleLowerCase()}`) {
    return true
  }

  return false
}
