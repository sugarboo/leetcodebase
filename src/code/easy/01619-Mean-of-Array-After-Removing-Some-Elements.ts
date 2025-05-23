export function trimMean(arr: number[]): number {
  const n = arr.length
  // The count of the 5% elements on each end will be remove.
  const k = Math.ceil(n * 0.05)
  // Sort the array in ascending order
  arr.sort((a, b) => a - b)
  // Sum the elements between the kth smallest and the kth largest elements
  let sum = 0
  for (let i = k; i < n - k; i++) {
    sum += arr[i]
  }

  // Calculate the average of the remaining elements within 10^-5 of the actual answer
  return sum / (n - 2 * k)
}
