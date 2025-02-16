export function sumZero(n: number): number[] {
  const ans: number[] = []

  if (n % 2 === 1) {
    ans.push(0)
  }

  for (let i = 1; ans.length < n; i++) {
    ans.push(i, -i)
  }

  return ans
}
