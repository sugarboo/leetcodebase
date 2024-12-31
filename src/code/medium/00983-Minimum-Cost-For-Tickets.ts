export function mincostTickets(days: number[], costs: number[]): number {
  // The last day on which we travel
  const lastDay = days[days.length - 1]
  const dp = Array.from<number>({ length: lastDay + 1 }).fill(0)

  let i = 0
  for (let day = 1; day <= lastDay; day++) {
    // If we are not traveling on this day, we can just copy the previous day's cost
    if (day < days[i]) {
      dp[day] = dp[day - 1]
    } else {
      // Buy a pass on this day, and move on to the next travel day
      i++
      // Store the cost with the minimum cost of the three passes
      dp[day] = Math.min(dp[day - 1] + costs[0], Math.min(dp[Math.max(0, day - 7)] + costs[1], dp[Math.max(0, day - 30)] + costs[2]))
    }
  }

  return dp[lastDay]
}
