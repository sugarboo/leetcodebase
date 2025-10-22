export function largestGoodInteger(num: string): string {
  let max = ''
  for (let i = 0; i < num.length - 2; i++) {
    const sub = num.substring(i, i + 3)
    if (num[i].repeat(3) === sub && Number(sub) >= Number(max)) {
      max = sub
    }
  }
  return max
}
