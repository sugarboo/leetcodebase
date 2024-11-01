function makeFancyString1(s: string): string {
  return s.replace(/(.)\1{2,}/g, '$1$1')
}

function makeFancyString2(s: string): string {
  const arr = s.split('')
  return arr.map((char, index) => {
    if (char === arr[index - 1] && char === arr[index + 1]) {
      return ''
    }
    return char
  }).join('')
}

export function makeFancyString(s: string): string {
  return makeFancyString2(s)
}
