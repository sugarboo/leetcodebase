/**
 * Solution 1: Hashmap and Iterate the Roman String
 *
 * @param s
 * @returns
 */
function romanToInt1(s: string): number {
  const map = {
    I: 1,
    IV: 4,
    IX: 9,
    V: 5,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }
  const len = s.length

  let total = 0
  let i = 0
  while (i < len) {
    const curr = s[i]
    const next = i < len - 1 ? s[i + 1] : ''
    if (map[`${curr}${next}`]) {
      total += map[`${curr}${next}`]
      i += 2
    } else if (map[curr]) {
      total += map[curr]
      i++
    }
  }

  return total
}

/**
 * Solution 2: Iterative Approach
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param s
 * @returns
 */
function romanToInt2(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let total = 0
  let prev = 0
  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]]
    // If current value is greater than the previous value, subtract twice the previous value; Otherwise, add current value to the sum
    total += curr > prev ? curr - 2 * prev : curr
    // Update the previous value for the next iteration
    prev = curr
  }

  return total
}

/**
 * Solution 3: Using Map for Flexibility
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param s
 * @returns
 */
function romanToInt3(s: string): number {
  const roman = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])

  let total = 0
  let prev = 0

  for (let i = 0; i < s.length; i++) {
    const curr = roman.get(s[i])!
    // If the current value is greater than the previous value, subtract the previous value; Otherwise, add the previous value
    if (curr > prev) {
      total -= prev
    } else {
      total += prev
    }
    // Update the previous value for next iteration
    prev = curr
  }
  // add the last value to sum
  total += prev

  return total
}

export function romanToInt(s: string): number {
  return romanToInt3(s)
}

/**
 * Solution Reference: https://medium.com/@AlexanderObregon/solving-the-roman-to-integer-problem-on-leetcode-typescript-solutions-walkthrough-7bb0586ab9f8
 */
