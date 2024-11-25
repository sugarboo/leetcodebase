export function numberOfLines(widths: number[], s: string): number[] {
  let lines = 1
  let width = 0

  for (const letter of s) {
    const w = widths[letter.charCodeAt(0) - 'a'.charCodeAt(0)]
    width += w
    if (width > 100) {
      lines++
      width = w
    }
  }

  return [lines, width]
}
