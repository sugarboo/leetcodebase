export function kthCharacter(k: number): string {
  let str = 'a'

  while (str.length < k) {
    let append = ''
    for (const char of str) {
      const isLast = char.charCodeAt(0) === 'z'.charCodeAt(0)
      append += isLast ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1)
    }
    str += append
  }

  return str[k - 1]
}
