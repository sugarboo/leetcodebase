export function kWeakestRows(mat: number[][], k: number): number[] {
  const rows = mat.map((row, index) => ({
    strength: row.filter(num => num === 1).length,
    index,
  }))

  rows.sort((a, b) => a.strength - b.strength)

  return rows.slice(0, k).map(({ index }) => index)
}
