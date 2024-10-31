export function reverseStr(s: string, k: number): string {
  let reversed = ''

  for (let i = 0; i < s.length; i += 2 * k) {
    reversed += `${s.substring(i, i + k).split('').reverse().join('')}${s.substring(i + k, i + 2 * k)}`
  }

  return reversed
}
