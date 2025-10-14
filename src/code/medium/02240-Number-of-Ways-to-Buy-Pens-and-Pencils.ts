export function waysToBuyPensPencils(total: number, cost1: number, cost2: number): number {
  if (cost1 < cost2) {
    return waysToBuyPensPencils(total, cost2, cost1)
  }

  let ans = 0
  let cnt1 = 0
  while (cnt1 * cost1 <= total) {
    ans += Math.floor((total - cnt1 * cost1) / cost2) + 1
    cnt1++
  }

  return ans
}
