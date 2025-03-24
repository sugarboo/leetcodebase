export function countDays(days: number, meetings: number[][]) {
  let freeDays = 0
  let lastEnd = 0
  // Sort meetings by start date
  meetings.sort((a, b) => a[0] - b[0])

  for (const meeting of meetings) {
    const [start, end] = meeting
    // Add current range of days without a meeting
    if (start > lastEnd + 1) {
      freeDays += start - lastEnd - 1
    }
    // Update latest meeting end
    lastEnd = Math.max(lastEnd, end)
  }

  // Add all days after last meeting
  freeDays += days - lastEnd

  return freeDays
}
