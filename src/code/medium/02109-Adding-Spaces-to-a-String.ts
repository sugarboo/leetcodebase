export function addSpaces(s: string, spaces: number[]): string {
  let ans = ''

  let j = 0
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[j]) {
      ans += ` ${s[i]}`
      j++
    } else {
      ans += s[i]
    }
  }

  return ans
}
