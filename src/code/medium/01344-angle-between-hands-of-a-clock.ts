export function angleClock(hour: number, minutes: number): number {
  const degree = Math.abs(30 * (hour + minutes / 60) - 6 * minutes)
  // Return the smaller angle
  return Math.min(degree, 360 - degree)
}
