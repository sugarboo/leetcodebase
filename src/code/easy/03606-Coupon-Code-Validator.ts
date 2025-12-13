function check(code: string, isActive: boolean) {
  const regex = /^[a-z0-9]*$/i
  for (const char of code) {
    if (char !== '_' && !regex.test(char))
      return false
  }
  return isActive
}

export function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
  const n = Math.min(code.length, businessLine.length, isActive.length)
  const groups: string[][] = [[], [], [], []]
  const coupons: string[] = []
  for (let i = 0; i < n; i++) {
    if (code[i] && check(code[i], isActive[i])) {
      switch (businessLine[i]) {
        case 'electronics':
          groups[0].push(code[i])
          break
        case 'grocery':
          groups[1].push(code[i])
          break
        case 'pharmacy':
          groups[2].push(code[i])
          break
        case 'restaurant':
          groups[3].push(code[i])
          break
      }
    }
  }

  for (const group of groups) {
    group.sort()
    coupons.push(...group)
  }

  return coupons
}
