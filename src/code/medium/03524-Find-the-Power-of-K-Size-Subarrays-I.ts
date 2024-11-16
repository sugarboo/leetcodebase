export function resultsArray(nums: number[], k: number): number[] {
  // To find out if all the elements in array are consecutive and sorted in ascending order
  const isValid = (arr: number[]): boolean => {
    if (arr.length < 1) {
      return false
    }
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== 1) {
        return false
      }
    }
    return true
  }

  const ans: number[] = []

  for (let i = 0; i + k - 1 < nums.length; i++) {
    const arr = nums.slice(i, i + k)
    ans.push(isValid(arr) ? Math.max(...arr) : -1)
  }

  return ans
}
