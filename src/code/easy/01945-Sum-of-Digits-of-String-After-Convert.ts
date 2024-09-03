export function getLucky(s: string, k: number): number {
  // get the initiate converted string
  const base = 'a'.charCodeAt(0) - 1
  let converted: string = ''
  for (const letter of s.toLocaleLowerCase()) {
    converted += letter.charCodeAt(0) - base
  }
  let transformed: number = 0
  while (k > 0) {
    // reset transformed in every loop
    transformed = 0
    for (const digit of converted) {
      transformed += Number(digit)
    }
    converted = String(transformed)
    k--
  }

  return transformed
}
