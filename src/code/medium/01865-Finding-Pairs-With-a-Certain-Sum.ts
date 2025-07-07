export class FindSumPairs {
  private nums1: number[] = []
  private nums2: number[] = []
  private freq = new Map<number, number>()

  constructor(nums1: number[], nums2: number[]) {
    this.nums1 = nums1
    this.nums2 = nums2
    for (const num of nums2) {
      this.freq.set(num, (this.freq.get(num) || 0) + 1)
    }
  }

  add(index: number, val: number): void {
    if (index < this.nums2.length) {
      const oldVal = this.nums2[index]
      const newVal = oldVal + val
      this.nums2[index] += val
      this.freq.set(oldVal, this.freq.get(oldVal)! - 1)
      this.freq.set(newVal, (this.freq.get(newVal) || 0) + 1)
    }
  }

  count(tot: number): number {
    let cnt = 0

    for (const num of this.nums1) {
      const rest = tot - num
      cnt += this.freq.get(rest) || 0
    }

    return cnt
  }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
