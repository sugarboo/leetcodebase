function longestCommonPrefix1(strs: string[]): string {
  const shortestLength = Math.min(...strs.map((str) => str.length))

  let result = ''
  if (strs && strs.length && shortestLength) {
    for (let i = 0; i < shortestLength; i++) {
      const arr = strs.map((str) => str[i])
      const char = arr[0]
      if (arr.every((s) => s === char)) {
        result += char
      }
    }
  }

  return result
}

export function longestCommonPrefix(strs: string[]): string {
  return longestCommonPrefix1(strs)
}
