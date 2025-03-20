export function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => {
    const countA = a.toString(2).split('1').length - 1
    const countB = b.toString(2).split('1').length - 1
    if (countA === countB) {
      return a - b
    }
    return countA - countB
  })
}
