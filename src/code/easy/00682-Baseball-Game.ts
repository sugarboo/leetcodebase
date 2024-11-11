export function calPoints(operations: string[]): number {
  const records: number[] = []

  operations.forEach((operation) => {
    const len = records.length
    switch (operation) {
      case '+': {
        if (len >= 2) {
          records.push(records[len - 1] + records[len - 2])
        }
        break
      }
      case 'D': {
        if (len >= 1) {
          records.push(records[len - 1] * 2)
        }
        break
      }
      case 'C': {
        if (len >= 1) {
          records.pop()
        }
        break
      }
      default: {
        records.push(Number(operation))
        break
      }
    }
  })

  return records.reduce((accu, curr) => accu + curr, 0)
}
