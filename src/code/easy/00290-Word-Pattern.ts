export function wordPattern(pattern: string, s: string): boolean {
  const patternList = pattern.split('')
  const strList = s.split(' ')

  if (patternList.length !== strList.length) {
    return false
  }

  for (let i = 0; i < strList.length; i++) {
    if (patternList.indexOf(patternList[i]) !== strList.indexOf(strList[i])) {
      return false
    }
  }
  return true
}
