export function evenOddBit(n: number): number[] {
  let even = 0
  let odd = 0
  const binstr = BigInt(n).toString(2)
  const len = binstr.length

  for (let i = 0; i < len; i++) {
    if (binstr[i] === '1') {
      if ((len - 1 - i) % 2 === 0) {
        even++
      } else {
        odd++
      }
    }
  }

  return [even, odd]
}
