export function canMakeSubsequence(str1: string, str2: string): boolean {
  const len1 = str1.length
  const len2 = str2.length
  let i = 0
  let j = 0

  while (i < len1 && j < len2) {
    if (str1[i] === str2[j] || str1[i].charCodeAt(0) + 1 === str2[j].charCodeAt(0) || str1[i].charCodeAt(0) - 25 === str2[j].charCodeAt(0)) {
      j++
    }
    i++
  }

  return j === len2
}
