export function divideString(s: string, k: number, fill: string): string[] {
  const ans: string[] = []

  for (let i = 0; i < s.length; i += k) {
    ans.push(s.substring(i, i + k))
  }

  const lastPos = ans.length - 1
  const lastCnt = ans[lastPos].length
  if (lastCnt < k) {
    ans[lastPos] = ans[lastPos].padEnd(k, fill.repeat(k - lastCnt))
  }

  return ans
}
