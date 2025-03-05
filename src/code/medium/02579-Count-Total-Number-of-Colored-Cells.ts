export function coloredCells(n: number): number {
  let count = 1
  let addend = 4

  while (--n > 0) {
    count += addend
    addend += 4
  }

  return count
}
