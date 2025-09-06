type Color = 'R' | 'G' | 'B'
type Colors = Set<Color>
// Maximum number of rods is 10 ('0' - '9')
const RODS_NUMBER = 10

export function countPoints(rings: string): number {
  const rods: Colors[] = Array.from({ length: RODS_NUMBER }, () => new Set())
  // Iterate through the rings string in steps of 2
  for (let i = 0; i < rings.length; i += 2) {
    // Get the color of the ring
    const color = rings[i] as Color
    // Get the position of the rod
    const pos = Number(rings[i + 1])
    // If the position is a valid number, add the color to the rod
    if (!Number.isNaN(pos) && pos < RODS_NUMBER) {
      rods[pos].add(color)
    }
  }

  // Filter rods that have at least 3 colors and return the count
  return rods.filter(colors => colors.size >= 3).length
}
