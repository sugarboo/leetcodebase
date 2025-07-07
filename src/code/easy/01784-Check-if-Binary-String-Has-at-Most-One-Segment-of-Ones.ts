export function checkOnesSegment(s: string): boolean {
  return s.split('0').filter(Boolean).length === 1
}
