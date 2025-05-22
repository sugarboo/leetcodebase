export function maxDepth(s: string): number {
  let maxDepth = 0
  let depth = 0

  for (const char of s) {
    if (char === '(') {
      maxDepth = Math.max(maxDepth, ++depth)
    } else if (char === ')') {
      depth--
    }
  }

  return maxDepth
}
