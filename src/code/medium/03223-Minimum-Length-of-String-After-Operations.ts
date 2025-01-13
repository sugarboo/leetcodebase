export function minimumLength(s: string): number {
  // Step 1: Initialize a frequencies array to count occurrences of each character
  const frequencies = Array.from({ length: 26 }, () => 0)

  // Step 2: Count the occurrences of each character in the string
  for (const char of s) {
    frequencies[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  let totalLength = 0

  // Step 3: Calculate the total length of the string after deletions count
  for (const freq of frequencies) {
    // Skip characters that don't appear in the string
    if (freq === 0) {
      continue
    }

    if (freq % 2 === 0) {
      // If the frequency is even, add 2 to the total length
      totalLength += 2
    } else {
      // If the frequency is odd, add 1 to the total length
      totalLength += 1
    }
  }

  // Step 4: Return the minimum length after deletions count
  return totalLength
}
