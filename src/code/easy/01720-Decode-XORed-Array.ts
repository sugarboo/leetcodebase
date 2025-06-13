export function decode(encoded: number[], first: number): number[] {
  const n = encoded.length + 1
  const arr: number[] = [first, ...Array.from({ length: n - 1 }, () => 0)]

  for (let i = 1; i < n; i++) {
    arr[i] = encoded[i - 1] ^ arr[i - 1]
  }

  return arr
}
