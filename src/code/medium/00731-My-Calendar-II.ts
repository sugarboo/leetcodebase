export class MyCalendarTwo {
  private calendar: [number, number][]
  private overlaps: [number, number][]

  constructor() {
    this.calendar = []
    this.overlaps = []
  }

  book(start: number, end: number): boolean {
    if (this.overlaps.filter(e => e[0] < end && e[1] > start).length !== 0) {
      return false
    }

    this.calendar.forEach((e) => {
      if (e[0] < end && e[1] > start) {
        this.overlaps.push([Math.max(e[0], start), Math.min(e[1], end)])
      }
    })

    this.calendar.push([start, end])
    return true
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
