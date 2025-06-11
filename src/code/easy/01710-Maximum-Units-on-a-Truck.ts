export function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1])
  let totalUnits = 0
  for (const [boxes, units] of boxTypes) {
    if (truckSize >= boxes) {
      totalUnits += boxes * units
      truckSize -= boxes
    } else {
      totalUnits += truckSize * units
      break
    }
  }
  return totalUnits
}
