export function restoreString(s: string, indices: number[]): string {
  const n = s.length
  if (n !== indices.length) {
    return ''
  }

  const ans: string[] = []
  for (let i = 0; i < n; i++) {
    const index = indices[i]
    ans[index] = s[i]
  }

  return ans.join('')
}
