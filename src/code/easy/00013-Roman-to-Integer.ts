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

  let total = 0, i = 0
  while(i < len) {
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

export function romanToInt(s: string): number {
  return romanToInt1(s)
}

/**
 * Solution Reference: https://medium.com/@AlexanderObregon/solving-the-roman-to-integer-problem-on-leetcode-typescript-solutions-walkthrough-7bb0586ab9f8
 */