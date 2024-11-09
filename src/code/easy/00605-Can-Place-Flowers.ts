export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0

  flowerbed.forEach((plot, index) => {
    // Check if the current plot is empty
    if (plot === 0) {
      // Check if the left and right plots are empty
      const isLeftPlotEmpty = (index === 0) || flowerbed[index - 1] === 0
      const isRightPlotEmpty = (index === flowerbed.length - 1) || flowerbed[index + 1] === 0

      // If both plots are empty, we can plant a flower here
      if (isLeftPlotEmpty && isRightPlotEmpty) {
        flowerbed[index] = 1
        count++
      }
    }
  })

  return count >= n
}
