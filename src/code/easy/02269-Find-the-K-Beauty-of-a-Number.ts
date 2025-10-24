export function divisorSubstrings(num: number, k: number): number {
  const str = `${num}`
  let ans = 0

  for (let i = 0; i <= str.length - k; i++) {
    const n = Number.parseInt(str.substring(i, i + k))
    if (n !== 0 && num % n === 0) {
      ans++
    }
  }

  return ans
}
