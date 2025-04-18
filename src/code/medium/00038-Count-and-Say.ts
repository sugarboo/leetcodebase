export function countAndSay(n: number): string {
  // Return a run-length pairs of a numeric string
  const getPairs = (str: string) => {
    const pairs: [string, number][] = []
    let count = 1
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++
      } else {
        pairs.push([str[i - 1], count])
        count = 1
      }
    }

    // push the final run
    pairs.push([str[str.length - 1], count])

    return pairs
  }

  // Build a run-length encoded string from a run-length pairs
  const buildRLE = (pairs: [string, number][]) => {
    let result = ''
    for (const [char, count] of pairs) {
      result += `${count}${char}`
    }

    return result
  }

  // Starts with 1 and apply the run-length encoding n - 1 times
  let ans = '1'
  for (let i = 1; i < n; i++) {
    const pairs = getPairs(ans)
    ans = buildRLE(pairs)
  }

  return ans
}
