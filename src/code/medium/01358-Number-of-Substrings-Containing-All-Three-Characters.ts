export function numberOfSubstrings(s: string): number {
  let count = 0
  const char = {
    a: 0,
    b: 0,
    c: 0,
  }

  let left = 0
  for (let right = 0; right < s.length; right++) {
    char[s[right]]++
    while (char.a > 0 && char.b > 0 && char.c > 0) {
      count += s.length - right
      char[s[left]]--
      left++
    }
  }

  return count
}
