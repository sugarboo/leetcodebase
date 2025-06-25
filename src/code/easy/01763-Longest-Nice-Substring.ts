export function longestNiceSubstring(s: string): string {
  const n = s.length

  let ans = ''
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sub = s.slice(i, j + 1)
      const result = sub.split('').every(c => sub.includes(c.toUpperCase()) && sub.includes(c.toLowerCase()))
      if (result && sub.length > ans.length) {
        ans = sub
      }
    }
  }

  return ans
}
