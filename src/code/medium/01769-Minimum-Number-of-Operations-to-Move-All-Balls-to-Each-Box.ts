export function minOperations(boxes: string): number[] {
  const n = boxes.length
  const result = Array.from<number>({ length: n }).fill(0)
  let ballsToLeft = 0
  let movesToLeft = 0
  let ballsToRight = 0
  let movesToRight = 0

  // Single pass: calculate moves from both left and right
  for (let i = 0; i < n; i++) {
    // Left pass
    result[i] += movesToLeft
    ballsToLeft += boxes[i] === '1' ? 1 : 0
    movesToLeft += ballsToLeft

    // Right pass
    const j = n - 1 - i
    result[j] += movesToRight
    ballsToRight += boxes[j] === '1' ? 1 : 0
    movesToRight += ballsToRight
  }

  return result
}
