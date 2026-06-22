export function maxNumberOfBalloons(text: string): number {
  return maxNumberOfBalloons2(text)
}

function maxNumberOfBalloons1(text: string): number {
  const balloonMap = new Map<string, number>([
    ['b', 1],
    ['a', 1],
    ['l', 2],
    ['o', 2],
    ['n', 1],
  ])

  const textCount = new Map<string, number>()
  for (const char of text) {
    if (balloonMap.has(char)) {
      textCount.set(char, (textCount.get(char) || 0) + 1)
    }
  }

  let minInstances = Infinity
  for (const [char, required] of balloonMap) {
    const count = textCount.get(char) || 0
    const instances = Math.floor(count / required)
    if (instances < minInstances) {
      minInstances = instances
    }
  }

  return minInstances
}

function maxNumberOfBalloons2(text: string): number {
  // Counts of 'a', 'b', 'l', 'o', 'n'
  const cnt: number[] = Array(5).fill(0)

  for (const letter of text) {
    switch (letter) {
      case 'a': {
        cnt[0]++
        break
      }
      case 'b': {
        cnt[1]++
        break
      }
      case 'l': {
        cnt[2] += 0.5
        break
      }
      case 'o': {
        cnt[3] += 0.5
        break
      }
      case 'n': {
        cnt[4]++
        break
      }
      default: {
        break
      }
    }
  }

  return Math.floor(Math.min(...cnt))
}
