export function pickGifts(gifts: number[], k: number): number {
  while (k-- > 0) {
    const max = Math.max(...gifts)
    const i = gifts.indexOf(max)
    gifts[i] = Math.floor(Math.sqrt(max))
  }

  return gifts.reduce((accu, curr) => accu + curr, 0)
}
