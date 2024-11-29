export function binaryGap(n: number): number {
  const str = n.toString(2)
  let gap = 0
  // Keeps track of the last index of '1'
  let lastIndex = -1

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      if (lastIndex !== -1) {
        gap = Math.max(i - lastIndex, gap)
      }
      // Update the last index of '1'
      lastIndex = i
    }
  }

  return gap
}
