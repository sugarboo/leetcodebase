export function reverseDegree(s: string): number {
  let ans = 0
  let baseCode = 'a'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) {
    const currCode = s[i].charCodeAt(0)
    ans += (26 - (currCode - baseCode)) * (i + 1)
  }

  return ans
}
