export function maximumSwap(num: number): number {
  const numStr = num.toString()
  const len = numStr.length
  let maxNum = num

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const numerals = numStr.split('');
      [numerals[i], numerals[j]] = [numerals[j], numerals[i]]
      const tempNum = Number(numerals.join(''))
      maxNum = Math.max(maxNum, tempNum)
    }
  }

  return maxNum
}
