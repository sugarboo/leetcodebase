export function isPalindrome(s: string): boolean {
  s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '')
  return s === s.split('').reverse().join('')
}
