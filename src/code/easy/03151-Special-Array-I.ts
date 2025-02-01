export function isArraySpecial(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === arr[i - 1] % 2) {
      return false
    }
  }
  return true
}
