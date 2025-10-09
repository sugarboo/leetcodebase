function countHillValley1(nums: number[]): number {
  let ans = 0
  let prev = nums[0]
  for (let i = 1; i < nums.length - 1; i++) {
    const curr = nums[i]
    const next = nums[i + 1]
    if (curr === next) {
      continue
    }
    if (prev !== curr && (prev < curr) === (curr > next)) {
      ans++
    }
    prev = curr
  }

  return ans
}

function countHillValley2(nums: number[]): number {
  // Use -1, 0, 1 to represent the state of the previous element: -1: prev < curr, 0: prev = curr, 1: prev > curr
  let prevState = 0
  let ans = 0
  for (let i = 0; i < nums.length - 1; i++) {
    const currState = Math.sign(nums[i + 1] - nums[i])
    if (currState === 0) {
      continue
    }
    if (prevState === -currState) {
      ans++
    }
    prevState = currState
  }

  return ans
}

export function countHillValley(nums: number[]): number {
  return countHillValley2(nums)
}
