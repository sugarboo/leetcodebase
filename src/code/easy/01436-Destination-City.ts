export function destCity(paths: string[][]): string {
  const departures: string[] = []
  const destinations: string[] = []

  for (const path of paths) {
    const [departure, destination] = path
    departures.push(departure)
    destinations.push(destination)
  }

  for (const destination of destinations) {
    if (!departures.includes(destination)) {
      return destination
    }
  }

  return ''
}
