export function areNumbersAscending(s: string): boolean {
  const arr = s.match(/\d+/g)?.map(Number)

  if (!arr) {
    return false
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false
    }
  }

  return true
}
