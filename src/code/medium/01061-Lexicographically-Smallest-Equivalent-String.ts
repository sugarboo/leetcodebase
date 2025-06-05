export function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz')

  const graph = alphabet.reduce((acc, curr) => {
    acc[curr] = new Set<string>([curr])
    return acc
  }, {} as Record<string, Set<string>>)

  const connect = (s1: string, s2: string) => {
    for (const x of graph[s1]) {
      for (const y of graph[s2]) {
        graph[x].add(y)
        graph[y].add(x)
      }
    }
  }

  for (let i = 0; i < s1.length; i++) {
    connect(s1[i], s2[i])
  }

  let ans = ''
  for (const char of baseStr) {
    const set = graph[char]
    const minChar = Array.from(set).sort()[0]
    ans += minChar
  }

  return ans
}
