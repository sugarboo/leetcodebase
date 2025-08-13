const min = Math.min
const abs = Math.abs

export function minTimeToType(word: string): number {
  let time = 0
  const origin = 'a'.charCodeAt(0)
  let prev = 0

  for (const char of word) {
    const curr = char.charCodeAt(0) - origin
    // Moving time + typing time (1s)
    time += min(abs(curr - prev), 26 - abs(curr - prev)) + 1
    prev = curr
  }

  return time
}
