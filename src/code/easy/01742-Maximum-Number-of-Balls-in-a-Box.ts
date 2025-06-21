export function countBalls(lowLimit: number, highLimit: number): number {
  const map = new Map()
  for (let i = lowLimit; i <= highLimit; i++) {
    const sum = String(i).split('').reduce((acc, curr) => Number(acc) + +Number(curr), 0)
    map.set(sum, (map.get(sum) || 0) + 1)
  }
  const max: number = Math.max(...[...map.values()])
  return max
}
