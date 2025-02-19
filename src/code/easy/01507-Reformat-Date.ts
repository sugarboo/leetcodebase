export function reformatDate(date: string): string {
  let [day, month, year] = date.split(' ')

  const monthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  }
  month = monthMap[month]

  day = day.replace(/\D/g, '')
  day = day.length === 1 ? `0${day}` : day

  return `${year}-${month}-${day}`
}
