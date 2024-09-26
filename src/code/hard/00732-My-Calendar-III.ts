export class MyCalendarThree {
  private queue: [number, number][]

  constructor() {
    this.queue = []
  }

  book(start: number, end: number): number {
    this.queue.push([start, 1])
    this.queue.push([end, -1])
    this.queue.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] < b[1] ? -1 : 1
      } else {
        return a[0] < b[0] ? -1 : 1
      }
    })
    let result = 0
    let count = 0
    for (let i = 0; i < this.queue.length; i++) {
      count += this.queue[i][1]
      result = Math.max(result, count)
    }
    return result
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
