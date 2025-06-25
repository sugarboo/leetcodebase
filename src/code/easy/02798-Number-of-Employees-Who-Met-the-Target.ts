export function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  return hours.reduce((acc, hour) => (hour >= target ? acc + 1 : acc), 0)
}
