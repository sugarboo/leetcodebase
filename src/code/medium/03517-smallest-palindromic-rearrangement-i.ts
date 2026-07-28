export function smallestPalindrome(s: string): string {
  const len = s.length
  const partition = Math.floor(len / 2)
  const base = s.substring(0, partition).split('').toSorted()
  const mid = len % 2 === 1 ? s[partition] : ''
  return [...base, mid, ...base.toReversed()].join('')
}
