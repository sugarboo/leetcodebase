function lengthOfLastWord1(s: string): number {
  const arr = s.trim().split(' ')
  return arr[arr.length - 1].length
}

export function lengthOfLastWord(s: string): number {
  return lengthOfLastWord1(s)
}
