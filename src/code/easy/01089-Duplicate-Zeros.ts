/**
 Do not return anything, modify arr in-place instead.
 */
export function duplicateZeros(arr: number[]): number[] {
  const fixedLength = arr.length

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++
    }
  }

  arr.length = fixedLength

  return arr
}
