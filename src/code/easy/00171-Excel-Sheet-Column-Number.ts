export function titleToNumber(columnTitle: string): number {
  let num: number = 0
  columnTitle = columnTitle.toLocaleUpperCase()
  const base = 'A'.charCodeAt(0)

  for (let i = 0; i < columnTitle.length; i++) {
    const letter = columnTitle[i]
    const power = columnTitle.length - i - 1
    num += (letter.charCodeAt(0) + 1 - base) * (26 ** power)
  }

  return num
}
