export function maximumValue(strs: string[]): number {
  let ans = 0

  for (const str of strs) {
    let value = 0
    if (Number.isNaN(Number(str))) {
      value = str.length
    } else {
      value = Number(str)
    }
    ans = Math.max(ans, value)
  }

  return ans
}
