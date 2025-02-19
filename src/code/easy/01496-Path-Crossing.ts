export function isPathCrossing(path: string): boolean {
  const visited = new Set<string>()
  let x = 0
  let y = 0
  visited.add(`${x},${y}`)

  for (const char of path) {
    switch (char) {
      case 'N':
        y++
        break
      case 'S':
        y--
        break
      case 'E':
        x++
        break
      case 'W':
        x--
        break
    }
    if (visited.has(`${x},${y}`)) {
      return true
    }
    visited.add(`${x},${y}`)
  }
  return false
}
