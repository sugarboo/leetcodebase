export function finalValueAfterOperations(operations: string[]): number {
  let x = 0

  for (const operation of operations)    {
    if(operation.includes('+')) {
      x++
    } else if(operation.includes('-')) {
      x--
    }
  }

  return x
}