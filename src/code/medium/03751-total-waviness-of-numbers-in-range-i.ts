export function totalWaviness(num1: number, num2: number): number {
  const getWaviness = (num: number): number => {
    const str: string = num.toString()
    let waviness: number = 0

    for (let i = 1; i < str.length - 1; i++) {
      const mid = str[i]
      const left = str[i - 1]
      const right = str[i + 1]
      const isPeak: boolean = mid > left && mid > right
      const isValley: boolean = mid < left && mid < right
      if (isPeak || isValley) {
        waviness++
      }
    }

    return waviness
  }

  let ans: number = 0

  for (let num = num1; num <= num2; num++) {
    ans += getWaviness(num)
  }

  return ans
}
