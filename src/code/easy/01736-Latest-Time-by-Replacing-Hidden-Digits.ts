export function maximumTime(time: string): string {
  const [HH, mm] = time.split(':')
  let [H, h] = HH.split('')
  let [M, m] = mm.split('')

  if (H === '?') {
    if (h !== '?') {
      if (Number(h) <= 3) {
        H = '2'
      } else {
        H = '1'
      }
    } else {
      H = '2'
      h = '3'
    }
  }

  if (h === '?') {
    if (Number(H) < 2) {
      h = '9'
    } else {
      h = '3'
    }
  }

  if (M === '?') {
    M = '5'
  }

  if (m === '?') {
    m = '9'
  }

  return `${H}${h}:${M}${m}`
}
