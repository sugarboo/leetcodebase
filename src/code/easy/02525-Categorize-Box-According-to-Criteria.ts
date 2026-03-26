export function categorizeBox(length: number, width: number, height: number, mass: number): string {
  const x = length >= 1e4 || width >= 1e4 || height >= 1e4 || length * width * height >= 1e9
  const y = mass >= 100
  if (x && y) {
    return 'Both'
  } else if (x) {
    return 'Bulky'
  } else if (y) {
    return 'Heavy'
  }
  return 'Neither'
}
