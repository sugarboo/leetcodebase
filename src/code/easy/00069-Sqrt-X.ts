function mySqrt1(x: number): number {
  return Math.floor(Math.sqrt(x))
}

function mySqrt2(x: number): number {
  let low = 0
  let high = x

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const square = mid * mid
    if (square <= x) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return high
}

export function mySqrt(x: number): number {
  return mySqrt2(x)
}
