export function countLargestGroup(n: number): number {
  const sumOfDigits = (num: number) => {
    num = Math.abs(num)
    let sum = 0

    while (num > 0) {
      sum += num % 10
      num = Math.floor(num / 10)
    }

    return sum
  }

  const map = new Map<number, number[]>()

  for (let i = 1; i <= n; i++) {
    const key = sumOfDigits(i)
    const group = map.get(key) || []
    group.push(i)
    map.set(key, group)
  }

  const maxGroupSize = Math.max(...Array.from(map.values()).map(group => group.length))
  const count = Array.from(map.values()).filter(group => group.length === maxGroupSize).length

  return count
}
