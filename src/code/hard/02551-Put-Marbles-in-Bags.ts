export function putMarbles(weights: number[], k: number): number {
  // To collect and sort the value of all n - 1 pairs
  const n = weights.length
  const pairWeights = Array<number>(n - 1).fill(0)
  for (let i = 0; i < n - 1; i++) {
    pairWeights[i] = weights[i] + weights[i + 1]
  }
  // Sort the first (n - 1) elements of the array
  pairWeights.sort((a, b) => a - b)

  let ans = 0
  // Get the difference between the largest k - 1 values and the smallest k - 1 values
  for (let i = 0; i < k - 1; i++) {
    ans += pairWeights[n - 2 - i] - pairWeights[i]
  }

  return ans
}
