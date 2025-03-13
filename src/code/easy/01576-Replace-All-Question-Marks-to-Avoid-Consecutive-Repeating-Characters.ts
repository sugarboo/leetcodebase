export function modifyString(s: string): string {
  const arr = s.split('')
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const filteredAlphabet = alphabet.filter(char => !arr.includes(char))
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '?') {
      arr[i] = filteredAlphabet[index]
      index = (index + 1) % filteredAlphabet.length
    }
  }
  return arr.join('')
}
