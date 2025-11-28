export function bestHand(ranks: number[], suits: string[]): string {
  const suitsSet = new Set(suits)
  if (suitsSet.size === 1) {
    return 'Flush'
  }
  const freq = new Map<number, number>()
  for (const rank of ranks) {
    freq.set(rank, (freq.get(rank) ?? 0) + 1)
  }
  const maxCnt = Math.max(...freq.values())
  switch (maxCnt) {
    case 1: {
      return 'High Card'
    }
    case 2: {
      return 'Pair'
    }
    case 3:
    default: {
      return 'Three of a Kind'
    }
  }
}
