export function findKthBit(n: number, k: number): string {
  let sequence = '0'

  // Generate sequence until we have enough elements or reach nth iteration
  for (let i = 1; i < n && k > sequence.length; i++) {
    sequence = `${sequence}1`

    // Append the inverted part of the existing sequence
    for (let j = sequence.length - 2; j >= 0; j--) {
      const invertedBit = sequence.charAt(j) === '1' ? '0' : '1'
      sequence = `${sequence}${invertedBit}`
    }
  }

  // Return the kth bit
  return sequence.charAt(k - 1)
}
