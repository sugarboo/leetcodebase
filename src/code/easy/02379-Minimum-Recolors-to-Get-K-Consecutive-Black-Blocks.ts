export function minimumRecolors(blocks: string, k: number): number {
  let left = 0
  let numWhites = 0
  let numRecolors = Number.MAX_SAFE_INTEGER

  // Move right pointer
  for (let right = 0; right < blocks.length; right++) {
    // Increment numWhites if block at right pointer is white
    if (blocks[right] === 'W') {
      numWhites++
    }

    // k consecutive elements are found
    if (right - left + 1 === k) {
      // Update minimum
      numRecolors = Math.min(numRecolors, numWhites)

      // Decrement numWhites if block at left pointer is white
      if (blocks[left] === 'W') {
        numWhites--
      }

      // Move left pointer
      left++
    }
  }

  return numRecolors
}
