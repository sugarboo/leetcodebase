export function repairCars(ranks: number[], cars: number): number {
  const maxRank = Math.max(...ranks)
  // The minimum possible time is 1
  let low = 1
  // The maximum possible time is when the slowest mechanic (highest rank) repairs all cars
  let high = maxRank * cars * cars

  // Perform binary search to find the minimum time required
  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    // Calculate the number of cars that can be repaired in mid time by all mechanics
    let repaired = 0
    for (const rank of ranks) {
      repaired += Math.floor(Math.sqrt(mid / rank))
    }
    // If the total cars repaired is greater than or equal to the required number of cars, we can try to find a smaller time
    if (repaired >= cars) {
      high = mid
    } else {
      // Otherwise, try a larger time
      low = mid + 1
    }
  }
  return low
}
