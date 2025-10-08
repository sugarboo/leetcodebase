export function cellsInRange(s: string): string[] {
  const ans: string[] = []
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const colBegin = letters.indexOf(s[0])
  const rowBegin = Number(s[1])
  const colEnd = letters.indexOf(s[3])
  const rowEnd = Number(s[4])

  for (let i = colBegin; i <= colEnd; i++) {
    for (let j = rowBegin; j <= rowEnd; j++) {
      ans.push(`${letters[i]}${j}`)
    }
  }

  return ans
}
