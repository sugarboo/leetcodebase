export function mostVisited(n: number, rounds: number[]): number[] {
  const ans: number[] = []
  const start = rounds[0]
  const end = rounds[rounds.length - 1]

  if (start <= end) {
    for (let i = start; i <= end; i++) {
      ans.push(i)
    }
  } else {
    for (let i = start; i <= n; i++) {
      ans.push(i)
    }
    for (let i = 1; i <= end; i++) {
      ans.push(i)
    }
  }

  return ans.sort((a, b) => a - b)
}
