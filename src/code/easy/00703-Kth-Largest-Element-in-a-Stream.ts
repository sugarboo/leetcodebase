export class KthLargest {
  index: number = 0
  sorted: number[] = []

  constructor(k: number, nums: number[]) {
    this.index = k
    // Sort by descending order
    this.sorted = nums.sort((a, b) => b - a)
  }

  add(val: number) {
    this.sorted = [...this.sorted, val].sort((a, b) => b - a)
    return this.sorted[this.index - 1]
  }
}
