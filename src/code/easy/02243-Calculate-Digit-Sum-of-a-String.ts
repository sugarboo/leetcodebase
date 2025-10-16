export function digitSum(s: string, k: number): string {
  while (s.length > k) {
    // The result of each iteration
    let res = ''
    // Split the string into parts of length k and calculate the sum of each part
    for (let i = 0; i < s.length; i += k) {
      const digits = s.slice(i, i + k)
      const sum = digits.split('').reduce((acc, curr) => acc + Number.parseInt(curr), 0)
      res += sum.toString()
    }
    // Update the string for the next iteration
    s = res
  }
  return s
}
