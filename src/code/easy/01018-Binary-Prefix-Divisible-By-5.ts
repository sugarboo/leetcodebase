export function prefixesDivBy5(nums: number[]): boolean[] {
  let str = ''
  const divisor = BigInt(5)
  const target = BigInt(0)
  const ans: boolean[] = []
  for (const num of nums) {
    str += num
    const res = BigInt(`0b${str}`)
    ans.push(res % divisor === target)
  }

  return ans
}