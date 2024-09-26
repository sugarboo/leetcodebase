export function canConstruct(ransomNote: string, magazine: string): boolean {
  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i]
    if (magazine.includes(letter)) {
      magazine = magazine.replace(letter, '')
    } else {
      return false
    }
  }
  return true
}
