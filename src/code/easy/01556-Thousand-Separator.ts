function thousandSeparator1(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function thousandSeparator2(n: number): string {
  let ans = ''
  const str = n.toString()
  const len = str.length

  for (let i = len - 1; i >= 0; i--) {
    ans = `${str[i]}${ans}`
    if ((len - i) % 3 === 0 && i !== 0) {
      ans = `.${ans}`
    }
  }

  return ans
}

export function thousandSeparator(n: number): string {
  return thousandSeparator2(n)
}
