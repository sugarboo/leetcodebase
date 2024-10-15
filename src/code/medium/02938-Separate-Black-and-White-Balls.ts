export function minimumSteps(s: string): number {
  let whitePosition = 0
  let totalSwaps = 0

  // Iterate through each ball (character) in the string
  for (let currentPos = 0; currentPos < s.length; currentPos++) {
    if (s.charAt(currentPos) === '0') {
      // Calculate the number of swaps needed to move it to the available position
      totalSwaps += currentPos - whitePosition
      // Move the next available position for a white ball one step to the right
      whitePosition++
    }
  }

  return totalSwaps
}
