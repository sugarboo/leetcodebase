function numJewelsInStones1(jewels: string, stones: string): number {
  let realStones = stones
  for (const jewel of jewels) {
    realStones = realStones.replaceAll(jewel, '')
  }

  return stones.length - realStones.length
}

function numJewelsInStones2(jewels: string, stones: string): number {
  let ans = 0

  stones.split('').forEach((stone) => {
    jewels.split('').forEach((jewel) => {
      if (jewel === stone) {
        ans++
      }
    })
  })

  return ans
}

export function numJewelsInStones(jewels: string, stones: string): number {
  return numJewelsInStones2(jewels, stones)
}
