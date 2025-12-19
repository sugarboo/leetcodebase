export function countTime(time: string): number {
  const [hour, minute] = time.split(':')
  const [h1, h2] = hour.split('')
  const [m1, m2] = minute.split('')
  let ans = 1

  if (m2 === '?') {
    ans *= 10
  }
  if (m1 === '?') {
    ans *= 6
  }
  if (h1 === '?' && h2 === '?') {
    ans *= 24
  } else if (h2 === '?') {
    if (h1 === '2') {
      ans *= 4
    } else {
      ans *= 10
    }
  } else if (h1 === '?') {
    if (h2 >= '4' && h2 <= '9') {
      ans *= 2
    } else {
      ans *= 3
    }
  }

  return ans
}
