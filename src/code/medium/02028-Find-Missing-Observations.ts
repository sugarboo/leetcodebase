export function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const result: number[] = []
  const sum = rolls.reduce((accum, curr) => accum + curr, 0)
  let missing = mean * (n + rolls.length) - sum

  if (missing <= 0) {
    return []
  } else {
    while (n > 0 && missing > 0) {
      const roll = Math.min(Math.ceil(missing / n), 6)
      result.push(roll)
      missing -= roll
      n -= 1
    }

    if (n !== 0 || missing !== 0) {
      return []
    } else {
      return result
    }
  }
}
