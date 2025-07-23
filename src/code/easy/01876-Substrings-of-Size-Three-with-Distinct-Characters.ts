export function countGoodSubstrings(s: string): number {
  let ans = 0

  for (let i = 2; i < s.length; i++) {
    if (s[i] !== s[i - 1] && s[i] !== s[i - 2] && s[i - 1] !== s[i - 2]) {
      ans++
    }
  }

  return ans
}
