type event = [number, 1 | -1]

export function minGroups(intervals: number[][]): number {
  // Convert the intervals to two events. Start as [start, 1] and end as [end + 1, -1]
  let events: event[] = []

  for (const interval of intervals) {
    events.push([interval[0], 1])
    events.push([interval[1] + 1, -1])
  }

  // Sort the events first by time, and then by type (1 for start, -1 for end)
  events = events.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })

  let concurrentIntervals = 0
  let maxConcurrentIntervals = 0

  // Sweep through the events
  for (const event of events) {
    // Track currently active intervals
    concurrentIntervals += event[1]
    maxConcurrentIntervals = Math.max(maxConcurrentIntervals, concurrentIntervals)
  }

  return maxConcurrentIntervals
}
