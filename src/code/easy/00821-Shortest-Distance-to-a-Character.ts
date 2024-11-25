export function shortestToChar(s: string, c: string): number[] {
  const targets: number[] = []

  const letters = s.split('')
  // Get all the target index of c
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === c) {
      targets.push(i)
    }
  }

  return letters.map((_, index) => {
    let distance = Number.MAX_SAFE_INTEGER

    // Calculate each letters's distance to each target, get the minimum distance
    targets.forEach((target) => {
      distance = Math.min(distance, Math.abs(target - index))
    })

    return distance
  })
}
