export function longestSubsequenceRepeatedK(s: string, k: number): string {
  const freq = new Map<string, number>()
  for (const c of s) {
    freq.set(c, (freq.get(c) || 0) + 1)
  }

  const candidate = [...freq.keys()]
    .filter(c => freq.get(c)! >= k)
    .sort()
    .reverse()

  const q: string[] = [...candidate]

  let ans = ''
  while (q.length > 0) {
    const curr = q.shift()!
    if (curr.length > ans.length) {
      ans = curr
    }
    // Generate the next candidate string
    for (const c of candidate) {
      const next = curr + c
      if (isKRepeated(s, next, k)) {
        q.push(next)
      }
    }
  }

  return ans
}

function isKRepeated(s: string, pattern: string, k: number): boolean {
  let i = 0
  let matched = 0

  for (const c of s) {
    if (c === pattern[i]) {
      i++
      if (i === pattern.length) {
        i = 0
        matched++
        if (matched === k) {
          return true
        }
      }
    }
  }

  return false
}
