export function numberOfSpecialChars(word: string): number {
  const set = new Set(word)
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let ans = 0

  for (const letter of alphabet) {
    const uppercase = letter.toLocaleUpperCase()
    const lowercase = letter.toLocaleLowerCase()
    if (set.has(uppercase) && set.has(lowercase)) {
      ans++
    }
  }

  return ans
}