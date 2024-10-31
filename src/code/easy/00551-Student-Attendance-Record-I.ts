export function checkRecord(s: string): boolean {
  return s.split('').filter(record => record === 'A').length < 2 && !s.includes('LLL')
}
