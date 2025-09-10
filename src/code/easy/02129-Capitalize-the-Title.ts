export function capitalizeTitle(title: string): string {
  const words = title.split(' ')
  return words.map((word) => {
    if (word.length <= 2) {
      return word.toLocaleLowerCase()
    } else {
      const [first, ...rest] = word
      return `${first.toLocaleUpperCase()}${rest.join('').toLocaleLowerCase()}`
    }
  }).join(' ')
}
