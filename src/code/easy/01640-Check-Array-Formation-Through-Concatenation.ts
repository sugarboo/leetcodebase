export function canFormArray(arr: number[], pieces: number[][]): boolean {
  const stack: number[] = []
  const map = new Map<number, number[]>()

  for (const piece of pieces) {
    map.set(piece[0], piece)
  }

  for (const num of arr) {
    if (map.has(num)) {
      stack.push(...map.get(num)!)
    }
  }

  return stack.toString() === arr.toString()
}
