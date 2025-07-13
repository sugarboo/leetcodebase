export function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
  players.sort((a, b) => a - b)
  trainers.sort((a, b) => a - b)

  const m = players.length
  const n = trainers.length

  let ans = 0

  for (let i = 0, j = 0; i < m && j < n; i++, j++) {
    // Find the first trainer that can match the player
    while (j < n && players[i] > trainers[j]) {
      j++
    }
    if (j < n) {
      ans++
    }
  }

  return ans
}
