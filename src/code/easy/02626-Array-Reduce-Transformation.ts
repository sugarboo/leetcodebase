export type Fn = (accum: number, curr: number) => number

export function reduce(nums: number[], fn: Fn, init: number): number {
  let result = init

  nums.forEach((num) => {
    result = fn(result, num)
  })

  return result
}
