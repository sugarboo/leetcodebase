export function lemonadeChange(bills: number[]): boolean {
  let five: number = 0
  let ten: number = 0

  for (const paid of bills) {
    switch (paid) {
      case 5: {
        five++
        break
      }
      case 10: {
        if (five === 0) {
          return false
        }
        five--
        ten++
        break
      }
      case 20: {
        if (five > 0 && ten > 0) {
          five--
          ten--
        } else if (five >= 3) {
          five -= 3
        } else {
          return false
        }
        break
      }
      default: {
        break
      }
    }
  }

  return true
}
