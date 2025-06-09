export function halvesAreAlike(s: string): boolean {
  const isVowel = (char: string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    return vowels.includes(char)
  }

  const mid = s.length / 2
  let firstVowelsCount = 0
  let secondVowelsCount = 0
  for (let i = 0; i < mid; i++) {
    const c = s[i]
    if (isVowel(c)) {
      firstVowelsCount++
    }
  }
  for (let i = mid; i < s.length; i++) {
    const c = s[i]
    if (isVowel(c)) {
      secondVowelsCount++
    }
  }

  return firstVowelsCount === secondVowelsCount
}
