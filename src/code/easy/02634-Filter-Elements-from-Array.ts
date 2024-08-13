type Fn = (n: number, i: number) => any

export function filter(arr: number[], fn: Fn): number[] {
  const list: number[] = []

  arr.forEach((num, i) => {
    if (fn(num, i)) {
      list.push(num)
    }
  })

  return list
}
