function strStr1(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

export function strStr(haystack: string, needle: string): number {
  return strStr1(haystack, needle)
}
