export function processStr(s: string): string {
  let ans = ''

  for (const c of s) {
    switch (c) {
      case '#': {
        ans = ans.repeat(2)
        break
      }
      case '%': {
        ans = [...ans].reverse().join('')
        break
      }
      case '*': {
        if (ans.length > 0) {
          ans = ans.substring(0, ans.length - 1)
        }
        break
      }
      default: {
        ans += c
        break
      }
    }
  }

  return ans
}
