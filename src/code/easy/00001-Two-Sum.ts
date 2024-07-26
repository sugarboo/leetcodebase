/**
 * Solution 1: Brute Force Approach
 * 
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * @param nums 
 * @param target 
 * @returns 
 */
function twoSum1(nums: number[], target: number): number[] {
  const len = nums.length

  for(let i = 0; i < len; i++) {
      const a = nums[i]
      for(let j = i + 1; j < len; j++) {
          const b = nums[j]
          if(a + b === target) {
              return [i, j]
          }
      }
  }

  return []
}

/**
 * Solution 2: Sorting and Two Pointers Approach
 * 
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * 
 * @param nums 
 * @param target 
 * @returns 
 */
function twoSum2(nums: number[], target: number): number[] {
  const numbers = nums.map((num, index) => ({ num, index }))
  numbers.sort((a, b) => a.num - b.num)

  let left = 0, right = nums.length - 1
  while (left < right) {
    const sum = numbers[left].num + numbers[right].num
    if (sum === target) {
      return [numbers[left].index, numbers[right].index]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

/**
 * Solution 3: Hash Map Approach
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param nums 
 * @param target 
 * @returns 
 */
function twoSum3(nums: number[], target: number): number[] {
  const map: {
    [key: number]: number
  } = {}
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map[complement] !== undefined) {
      return [map[complement], i]
    }
    map[nums[i]] = i
  }

  return []
}

export function twoSum(nums: number[], target: number): number[] {
  return twoSum3(nums, target)
}

/**
 * Solution Reference: https://medium.com/@ChrisBader/code-conquer-leetcode-1-two-sum-1c5562b040af
 */