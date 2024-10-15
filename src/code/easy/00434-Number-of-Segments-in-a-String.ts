export function countSegments(s: string): number {
  s = s.trim()
  return s.length ? s.split(/\s+/).length : 0
}
