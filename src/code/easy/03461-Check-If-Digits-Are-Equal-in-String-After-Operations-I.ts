export function hasSameDigits(s: string) {
  if (s && s.length >= 2) {
    while (s.length > 2) {
      let temp = ''
      for (let i = 0; i < s.length - 1; i++) {
        temp += `${(Number(s[i]) + Number(s[i + 1])) % 10}`
      }
      s = temp
    }

    return s[0] === s[1]
  }

  return false
}
