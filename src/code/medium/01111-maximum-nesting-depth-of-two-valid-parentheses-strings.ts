export function maxDepthAfterSplit(seq: string): number[] {
  const n = seq.length
  const ans = Array(n).fill(0)
  let depth = 0
  for (let i = 0; i < n; i++) {
    if (seq[i] === '(') {
      ans[i] = ++depth % 2
    } else if (seq[i] === ')') {
      ans[i] = depth-- % 2
    }
  }

  return ans
}
