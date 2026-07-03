export function makeSmallestPalindrome(s: string): string {
  const n = s.length
  const arr = s.split('')
  for (let i = 0; i < n / 2; i++) {
    const min = Math.min(arr[i].charCodeAt(0), arr[n - i - 1].charCodeAt(0))
    const minChar = String.fromCharCode(min)
    arr[i] = minChar
    arr[n - i - 1] = minChar
  }
  return arr.join('')
}
