export function squareIsWhite(coordinates: string): boolean {
  let charCodeSum = 0

  for (let i = 0; i < coordinates.length; i++) {
    charCodeSum += coordinates.charCodeAt(i)
  }

  return charCodeSum % 2 !== 0
}