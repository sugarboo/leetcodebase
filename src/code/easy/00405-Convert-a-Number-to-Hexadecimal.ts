export function toHex(num: number): string {
  const map = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  }

  let res = ''

  if (num === 0) {
    res = map[0]
  }

  if (num < 0) {
    num += 2 ** 32
  }

  while (num > 0) {
    const rem = Math.floor(num % 16)
    res = map[rem] + res
    num = Math.floor(num / 16)
  }

  return res
}
