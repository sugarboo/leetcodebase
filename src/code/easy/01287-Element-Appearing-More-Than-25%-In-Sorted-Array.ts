function findSpecialInteger1(arr: number[]): number {
  const threshold = arr.length / 4
  const map = new Map<number, number>()
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  for (const [num, count] of map.entries()) {
    if (count > threshold) {
      return num
    }
  }
  return -1
}

function findSpecialInteger2(arr: number[]): number {
  const n = arr.length
  let ans = arr[0]

  for (let i = 0; i < n; i++) {
    if (arr[i] === arr[i + Math.floor(n / 4)]) {
      ans = arr[i]
      break
    }
  }

  return ans
}

export function findSpecialInteger(arr: number[]): number {
  return findSpecialInteger2(arr)
}
