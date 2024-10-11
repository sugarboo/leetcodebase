export function smallestChair(times: number[][], targetFriend: number): number {
  // Create a list of friend objects sorted by arrival
  const sortedFriends = times.map((time, index) => {
    return {
      arrival: time[0],
      departure: time[1],
      // Preserve the original index that identifies the friend
      index,
    }
  }).sort((a, b) => a.arrival - b.arrival)

  // Create an array to represent the occupancy of chairs. chair[i] === the time when this chair will be unoccupied
  const chairs = Array.from<number>({ length: times.length }).fill(-1)

  for (const friend of sortedFriends) {
    let chair = 0

    // Look for the lowest i that chair[i] can be sat on
    for (let i = 0; i < chairs.length; i++) {
      if (friend.arrival >= chairs[i]) {
        chair = i
        break
      }
    }

    chairs[chair] = friend.departure

    // Return i if we found a seat for targetFriend
    if (friend.index === targetFriend) {
      return chair
    }
  }

  return -1
}
