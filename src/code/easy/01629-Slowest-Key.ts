export function slowestKey(releaseTimes: number[], keysPressed: string): string {
  const holdingTimes = releaseTimes.map((time, i) => i === 0 ? time : time - releaseTimes[i - 1])

  const maxTime = Math.max(...holdingTimes)
  const maxKeys = keysPressed.split('').filter((_, i) => holdingTimes[i] === maxTime)

  return maxKeys.sort()[maxKeys.length - 1]
}
