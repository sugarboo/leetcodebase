export function numberOfAlternatingGroups(colors: number[], k: number): number {
  // Extend the colors array to handle the circular sequence
  const extendedColors = [...colors, ...colors.slice(0, k - 1)]

  const n = extendedColors.length
  let num = 0
  // Initialize the bounds of the sliding window
  let left = 0
  let right = 1

  while (right < n) {
    // Check if the current color is the same as the last one
    if (extendedColors[right] === extendedColors[right - 1]) {
      // Pattern breaks, reset window from the current position
      left = right
      right++
      continue
    }

    // Expand the window to the right
    right++

    // Skip counting sequence if its length is less than k
    if (right - left < k) {
      continue
    }

    // Record a valid sequence and shrink window from the left to search for more
    num++
    left++
  }

  return num
}
