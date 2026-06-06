export function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
  const landToWater = solve(landStartTime, landDuration, waterStartTime, waterDuration)
  const waterToLand = solve(waterStartTime, waterDuration, landStartTime, landDuration)
  return Math.min(landToWater, waterToLand)
}

function solve(start1, duration1, start2, duration2) {
  let finish1 = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < start1.length; i++) {
    finish1 = Math.min(finish1, start1[i] + duration1[i])
  }
  let finish2 = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < start2.length; i++) {
    finish2 = Math.min(finish2, Math.max(start2[i], finish1) + duration2[i])
  }
  return finish2
}
