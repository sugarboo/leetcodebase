export function compareVersion(version1: string, version2: string): number {
  const parts1 = version1.split('.')
  const parts2 = version2.split('.')
  const len1 = parts1.length
  const len2 = parts2.length

  for (let i = 0; i < Math.max(len1, len2); i++) {
    const num1 = i < len1 ? Number.parseInt(parts1[i]) : 0
    const num2 = i < len2 ? Number.parseInt(parts2[i]) : 0
    if (num1 !== num2) {
      return Math.sign(num1 - num2)
    }
  }

  return 0
}
