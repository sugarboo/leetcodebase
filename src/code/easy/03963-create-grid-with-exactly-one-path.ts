export function createGrid(m: number, n: number): string[] {
  const grid: string[] = Array<string>(m)
  grid[0] = '.'.repeat(n)
  const row = `${'#'.repeat(n - 1)}.`
  for (let i = 1; i < m; i++) {
    grid[i] = row
  }

  return grid
}
