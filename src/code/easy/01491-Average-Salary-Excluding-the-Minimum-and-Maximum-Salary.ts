export function average(salary: number[]): number {
  const n = salary.length
  let sum = 0
  let max = salary[0]
  let min = salary[0]

  for (let i = 0; i < n; i++) {
    sum += salary[i]
    if (salary[i] > max) {
      max = salary[i]
    }
    if (salary[i] < min) {
      min = salary[i]
    }
  }

  return (sum - max - min) / (n - 2)
}
