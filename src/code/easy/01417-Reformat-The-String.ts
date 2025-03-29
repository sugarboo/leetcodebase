export function reformat(s: string): string {
  const letters: string[] = []
  const digits: string[] = []

  for (const c of s) {
    if (Number.isNaN(Number(c))) {
      letters.push(c)
    } else {
      digits.push(c)
    }
  }

  const cntLetters = letters.length
  const cntDigits = digits.length
  // if cntLetters - cntDigits has any of the values [-1, 0, 1] we have an answer, otherwise we don't have any answer
  if (Math.abs(cntLetters - cntDigits) > 1) {
    return ''
  }

  let ans = ''
  for (let i = 0; i < Math.max(cntLetters, cntDigits); i++) {
    if (cntLetters > cntDigits) {
      ans += `${letters[i] || ''}${digits[i] || ''}`
    } else {
      ans += `${digits[i] || ''}${letters[i] || ''}`
    }
  }

  return ans
}
