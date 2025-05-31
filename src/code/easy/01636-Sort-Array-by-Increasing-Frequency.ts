export function frequencySort(nums: number[]): number[] {
  // Count the frequency of each number
  const freq = new Map<number, number>()
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  // Sort the numbers based on frequency and value
  nums.sort((a, b) => {
    const freqA = freq.get(a)!
    const freqB = freq.get(b)!
    if (freqA !== freqB) {
      // If the frequencies are different, sort by frequency in ascending order
      return freqA - freqB
    } else {
      // If the frequencies are the same, sort by value in descending order
      return b - a
    }
  })

  return nums
}
