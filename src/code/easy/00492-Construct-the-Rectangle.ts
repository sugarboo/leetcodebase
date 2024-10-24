export function constructRectangle(area: number): number[] {
  let width = Math.floor(Math.sqrt(area))
  let length = width

  while (width > 0) {
    length = area / width
    if (Number.isInteger(length)) {
      break
    } else {
      width--
    }
  }

  return [length, width]
}
