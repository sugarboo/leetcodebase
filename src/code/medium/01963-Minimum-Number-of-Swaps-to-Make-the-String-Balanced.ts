export function minSwaps(s: string): number {
  // initialize close to track how many close bracket "]" is there in string s
  // maxClose to track how many close bracket "]" is before open bracket "["
  let close: number = 0
  let maxClose: number = 0

  // run for of loop for character s
  for (const char of s) {
    // if char is open bracket "[" then decrement close
    if (char === '[') {
      close--
    } else {
      // else increment close
      close++

      // find max between close and maxClose
      maxClose = Math.max(close, maxClose)
    }
  }

  // add 1 to maxClose and divide by 2 and return it's Math.floor value
  return Math.floor((maxClose + 1) / 2)
}
