export function findRestaurant(list1: string[], list2: string[]): string[] {
  const list: {
    word: string
    indexSum: number
  }[] = []

  list1.forEach((word, i) => {
    const j = list2.indexOf(word)
    if (j !== -1) {
      list.push({
        word,
        indexSum: i + j,
      })
    }
  })

  return list
    .sort((a, b) => a.indexSum - b.indexSum)
    .filter(item => item.indexSum === list[0].indexSum)
    .map(({ word }) => word)
}
