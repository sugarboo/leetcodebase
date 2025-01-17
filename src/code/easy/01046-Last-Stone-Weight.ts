export function lastStoneWeight(stones: number[]) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b)
    const x = stones.pop()!
    const y = stones.pop()!

    if (x !== y) {
      stones.push(Math.abs(x - y))
    }
  }

  return stones.length !== 0 ? stones[0] : 0
}
