export function distributeCandies(candies: number, num_people: number): number[] {
  const ans = Array.from({ length: num_people }, () => 0)

  let turn = 0
  while (candies > 0) {
    const distribute = Math.min(candies, turn + 1)
    ans[turn % num_people] += distribute
    candies -= distribute
    turn++
  }

  return ans
}
