export function maxNumberOfBalloons(text: string): number {
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
