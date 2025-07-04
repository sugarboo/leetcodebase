export function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  const keyIdxMap = new Map([
    ['type', 0],
    ['color', 1],
    ['name', 2],
  ])

  const ruleIdx = keyIdxMap.get(ruleKey)!

  return items.filter(item => item[ruleIdx] === ruleValue).length
}
