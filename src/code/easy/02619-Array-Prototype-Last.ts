export function last() {
  const { length = 0 } = this

  if (length <= 0) {
    return -1
  }
  return this[length - 1]
}
