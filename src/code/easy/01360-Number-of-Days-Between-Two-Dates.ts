export function daysBetweenDates(date1: string, date2: string): number {
  // Count the number of days from 1970-01-01 to date
  const countDays = (str: string) => {
    const date = new Date(str)
    const days = date.getTime() / (1000 * 60 * 60 * 24)
    return Math.floor(days)
  }

  return Math.abs(countDays(date1) - countDays(date2))
}
