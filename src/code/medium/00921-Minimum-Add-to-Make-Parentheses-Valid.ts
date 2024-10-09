export function minAddToMakeValid(s: string): number {
  let open = 0
  let close = 0

  for (const c of s) {
    if (c === '(') {
      open++
    } else if (!open) {
      close++
    } else {
      open--
    }
  }
  return open + close
}
