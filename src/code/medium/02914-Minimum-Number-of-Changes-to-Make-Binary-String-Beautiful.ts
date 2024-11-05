export function minChanges(s: string): number {
  let changes = 0

  // Loop the string, check each blocks of size 2
  for (let i = 0; i < s.length; i += 2) {
    const pair = `${s[i]}${s[i + 1]}`
    if (['10', '01'].includes(pair)) {
      changes++
    }
  }

  return changes
}
