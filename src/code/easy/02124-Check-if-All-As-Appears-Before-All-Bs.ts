export function checkString(s: string): boolean {
  const i = s.indexOf('b')
  return i === -1 ? true : !s.substring(i).includes('a')
}