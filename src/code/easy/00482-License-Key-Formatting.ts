export function licenseKeyFormatting(s: string, k: number): string {
  let res = ''
  let count = 0
  s = s.toLocaleUpperCase()

  // Loop the s backwardly, count the char inserting, if count === k, insert `-`
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i]
    if (char === '-') {
      continue
    }
    if (count === k) {
      res = `-${res}`
      count = 0
    }
    res = `${char}${res}`
    count++
  }

  return res
}
