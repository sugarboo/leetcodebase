export function percentageLetter(s: string, letter: string): number {
  const letterCount = s.split('').filter(char => char === letter).length
  return Math.floor((letterCount / s.length) * 100)
}
