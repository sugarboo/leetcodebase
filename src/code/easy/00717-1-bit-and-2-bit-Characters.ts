export function isOneBitCharacter(bits: number[]): boolean {
  let i = 0
  while (i < bits.length - 1) {
    if (bits[i] === 0) {
      i++
    }
    if (bits[i] === 1) {
      i += 2
    }
  }

  return i === bits.length - 1
}
