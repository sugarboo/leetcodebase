export function numberOfAlternatingGroups(colors: number[]): number {
  const n = colors.length
  let num = 0

  for (let i = 0; i < n; i++) {
    const current = colors[i]
    const next = colors[(i + 1) % n]
    const prev = colors[(i - 1 + n) % n]

    if (current !== next && current !== prev) {
      num++
    }
  }

  return num
}
