export function checkValidCuts(n: number, rectangles: number[][]): boolean {
  // Helper function to check if valid cuts can be made in a specific dimension. dim = 0 for horizontal, 1 for vertical
  const checkCuts = (rectangles: number[][], dim: number): boolean => {
    // Sort rectangles based on the specified dimension
    rectangles.sort((a, b) => a[dim] - b[dim])

    let gapCount = 0
    // Track the furthest ending coordinate seen so far
    let furthestEnd = rectangles[0][dim + 2]

    for (let i = 1; i < rectangles.length; i++) {
      const rect = rectangles[i]

      // If the current rectangle starts after the furthest ending, there's a gap where a cut can be made
      if (furthestEnd <= rect[dim]) {
        gapCount++
      }

      // Update the furthest ending coordinate
      furthestEnd = Math.max(furthestEnd, rect[dim + 2])
    }

    // We need at least 2 gaps to create 3 sections
    return gapCount >= 2
  }

  // Try both horizontal and vertical cuts
  return checkCuts(rectangles, 0) || checkCuts(rectangles, 1)
}
