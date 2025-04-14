export function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  const n = startTime.length
  let count = 0

  for (let i = 0; i < n; i++) {
    const start = startTime[i]
    const end = endTime[i]

    if (start <= queryTime && end >= queryTime) {
      count++
    }
  }

  return count
}
