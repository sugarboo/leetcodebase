function countSeniors1(details: string[]): number {
  return details.filter(detail => Number(detail.slice(11, 13)) > 60).length
}

export function countSeniors(details: string[]): number {
  return countSeniors1(details)
}
