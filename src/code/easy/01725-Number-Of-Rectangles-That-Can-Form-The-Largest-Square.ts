export function countGoodRectangles(rectangles: number[][]): number {
  const maxLength = Math.max(...rectangles.map(rectangle => Math.min(...rectangle)))
  return rectangles.filter(rectangle => Math.min(...rectangle) === maxLength).length
}
