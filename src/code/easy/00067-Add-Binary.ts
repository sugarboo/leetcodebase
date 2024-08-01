function addBinary1(a: string, b: string): string {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
}

export function addBinary(a: string, b: string): string {
  return addBinary1(a, b)
}
