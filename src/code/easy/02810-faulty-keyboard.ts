export function finalString(s: string): string {
  let arr: string[] = []

  for (const c of s) {
    if (c === 'i') {
      arr.reverse()
    } else {
      arr.push(c)
    }
  }

  return arr.join('')
}