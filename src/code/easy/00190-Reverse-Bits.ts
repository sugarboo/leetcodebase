function reverseBits1(n: number): number {
  let result = ''

  const str = n.toString(2)
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  // If n starts with a bunch of 0, n.toString(2) will lost the starting zero. Fill 0 in the end of result manually
  result = result.padEnd(32, '0')

  return Number(BigInt(`0b${result}`).toString(10))
}

function reverseBits2(n: number): number {
  let result = 0

  for (let i = 0; i < 32; i++) {
    result <<= 1
    result |= n & 1
    n >>>= 1
  }

  // Make sure result is a 32 bits unsigned integer
  return result >>> 0
}

export function reverseBits(n: number): number {
  return reverseBits1(n)
}
