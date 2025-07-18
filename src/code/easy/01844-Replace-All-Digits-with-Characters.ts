export function replaceDigits(s: string): string {
  const arr = s.split('')

  for (let i = 1; i < arr.length; i++) {
    const digit = Number(arr[i])
    if (!Number.isNaN(digit)) {
      const prevCharCode = arr[i - 1].charCodeAt(0)
      arr[i] = String.fromCharCode(prevCharCode + digit)
    }
  }

  return arr.join('')
}
