export function convertTime(current: string, correct: string): number {
  let ans = 0

  const [currentHour, currentMin] = current.split(':').map(Number)
  const [correctHour, correctMin] = correct.split(':').map(Number)
  let minDiff = (correctHour - currentHour) * 60 + (correctMin - currentMin)

  while (minDiff > 0) {
    let num = 1
    switch (true) {
      case (minDiff < 5):{
        minDiff--
        break
      }
      case (minDiff >= 5 && minDiff < 15):{
        num = Math.floor(minDiff / 5)
        minDiff -= 5 * num
        break
      }
      case (minDiff >= 15 && minDiff < 60):{
        num = Math.floor(minDiff / 15)
        minDiff -= 15 * num
        break
      }
      default: {
        num = Math.floor(minDiff / 60)
        minDiff -= 60 * num
        break
      }
    }
    ans += num
  }

  return ans
}
