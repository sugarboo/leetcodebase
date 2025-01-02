export function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const ans = Array.from({ length: queries.length }, () => 0)

  const prefixSum = Array.from({ length: words.length }, () => 0)

  let sum = 0
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (vowels.includes(word[0]) && vowels.includes(word[word.length - 1])) {
      sum++
    }
    prefixSum[i] = sum
  }

  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i]
    ans[i] = prefixSum[end] - (start > 0 ? prefixSum[start - 1] : 0)
  }

  return ans
}
