export function sortVowels(s: string): string {
  const isVowel = (char: string) => ['a', 'e', 'i', 'o', 'u'].includes(char.toLocaleLowerCase())

  const vowels = [...s].filter(isVowel)
  vowels.sort()

  let ans = ''
  let idx = 0
  for (const c of s) {
    if (isVowel(c)) {
      ans += vowels[idx++]
    } else {
      ans += c
    }
  }

  return ans
}
