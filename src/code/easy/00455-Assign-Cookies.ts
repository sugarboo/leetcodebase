export function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let contentChildren = 0
  let cookieIndex = 0

  while (cookieIndex < s.length && contentChildren < g.length) {
    if (s[cookieIndex] >= g[contentChildren]) {
      contentChildren++
    }
    cookieIndex++
  }

  return contentChildren
}
