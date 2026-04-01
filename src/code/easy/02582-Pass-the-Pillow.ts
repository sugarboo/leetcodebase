export function passThePillow(n: number, time: number): number {
  // Time cost of a round trip is 2 * (n - 1)
  time %= 2 * (n - 1)
  // If time is less than n, it means the pillow is moving forward
  // If time is greater than or equal to n, it means the pillow is moving backward
  return time < n ? time + 1 : n * 2 - time - 1
}
