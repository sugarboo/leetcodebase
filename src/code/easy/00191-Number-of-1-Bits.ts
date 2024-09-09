function hammingWeight1(n: number): number {
  const str = n.toString(2)
  return str.replace(/0/g, '').length
}

function hammingWeight2(n: number): number {
  let count = 0
  while (n !== 0) {
    if (n & 1) {
      count++
    }
    // IMPORTANT NOTE:-when we are use >> operator  at that time it will not work for 11111111111111111111111111111101 this test case so we can use >>> operator because Use unsigned right shift to handle large positive numbers
    n = n >>> 1
  }
  return count
}

export function hammingWeight(n: number): number {
  return hammingWeight1(n)
}
