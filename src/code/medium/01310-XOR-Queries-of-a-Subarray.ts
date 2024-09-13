export function xorQueries(arr: number[], queries: [number, number][]): number[] {
  return queries.map((query) => {
    let [left, right] = query
    let answer
    while (left <= right) {
      answer ^= arr[left++]
    }
    return answer as number
  })
}
