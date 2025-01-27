export function dayOfTheWeek(day: number, month: number, year: number): string {
  const date = new Date(year, month - 1, day)
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return daysOfWeek[date.getDay()]
}
