function threeConsecutiveOdds1(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      return true
    }
  }
  return false
}

function threeConsecutiveOdds2(arr: number[]): boolean {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++
    } else {
      count = 0
    }
    if (count === 3) {
      return true
    }
  }

  return false
}

export function threeConsecutiveOdds(arr: number[]): boolean {
  return threeConsecutiveOdds1(arr)
}
