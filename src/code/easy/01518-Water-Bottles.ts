export function numWaterBottles(numBottles: number, numExchange: number): number {
  let ans = 0
  while (numBottles >= numExchange) {
    ans += numExchange
    numBottles -= numExchange - 1
  }
  return ans + numBottles
}