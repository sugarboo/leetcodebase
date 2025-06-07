export function countStudents(students: number[], sandwiches: number[]): number {
  let round = 0

  while (true) {
    // run till all students able to eat or round is equal to students length
    if (students.length === 0 || round === students.length) {
      break
    }
    if (students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
      round = 0
    } else {
      students.push(students.shift()!)
      round++
    }
  }

  return students.length
}
