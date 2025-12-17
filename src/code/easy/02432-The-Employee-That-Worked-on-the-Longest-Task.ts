export function hardestWorker(n: number, logs: number[][]): number {
  let ans = logs[0][0]
  let maxTime = logs[0][1]

  for (let i = 1; i < logs.length; i++) {
    const [id, time] = logs[i]
    const workTime = time - logs[i - 1][1]
    if (workTime > maxTime) {
      maxTime = workTime
      ans = id
    } else if (workTime === maxTime) {
      ans = Math.min(ans, id)
    }
  }

  return ans
}
