export function distanceTraveled(mainTank: number, additionalTank: number): number {
  let ans = 0

  while (mainTank >= 5 && additionalTank > 0) {
    ans += 5 * 10
    mainTank -= 5
    mainTank++
    additionalTank--
  }

  ans += mainTank * 10

  return ans
}
