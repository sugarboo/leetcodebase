export function getSmallestString(n: number, k: number): string {
  let result = ''
  const a = 'a'.charCodeAt(0)
  const alphabetSize = 26

  while (n > 0) {
    const code = Math.min(k - n + 1, alphabetSize)
    result = `${String.fromCharCode(a + code - 1)}${result}`
    k -= code
    n--
  }

  return result
}
