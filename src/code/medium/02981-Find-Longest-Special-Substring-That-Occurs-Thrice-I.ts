export function maximumLength(s: string): number {
  // Create a HashMap to store the count of all the substrings
  const count = new Map<string, number>()

  for (let start = 0; start < s.length; start++) {
    let currString = ''
    for (let end = start; end < s.length; end++) {
      // If currString is empty or the current character matches the last character
      if (currString.length === 0 || currString.charAt(currString.length - 1) === s.charAt(end)) {
        currString += s.charAt(end)
        count.set(currString, (count.get(currString) || 0) + 1)
      } else {
        break
      }
    }
  }

  // Create a variable ans to store the longest length of substrings with frequency at least 3
  let ans = 0
  count.forEach((value, key) => {
    if (value >= 3 && key.length > ans) {
      ans = key.length
    }
  })

  return ans === 0 ? -1 : ans
}
