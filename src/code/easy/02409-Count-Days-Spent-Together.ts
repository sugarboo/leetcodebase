function calcDays(s: string) {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const [month, day] = s.split('-').map(Number)
  return DAYS.slice(0, month - 1).reduce((acc, curr) => acc + curr, 0) + day
}

export function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
  const left = calcDays(arriveAlice > arriveBob ? arriveAlice : arriveBob)
  const right = calcDays(leaveAlice < leaveBob ? leaveAlice : leaveBob)
  return Math.max(right - left + 1, 0)
}
