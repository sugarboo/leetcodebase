export function countSymmetricIntegers(low: number, high: number): number {
  let count = 0

  for (let num = low; num <= high; num++) {
    const str = `${num}`
    const len = str.length
    if (len % 2 === 0) {
      const arr = Array.from(str, Number)
      const mid = len / 2
      const leftSide = arr.slice(0, mid)
      const rightSide = arr.slice(mid)
      const leftSum = leftSide.reduce((a, b) => a + b, 0)
      const rightSum = rightSide.reduce((a, b) => a + b, 0)
      if (leftSum === rightSum) {
        count++
      }
    }
  }

  return count
}