function plusOne1(digits: number[]): number[] {
  const newDigits = [...digits]
  const len = digits.length

  if (digits.every(digit => digit === 9)) {
    // If all digits are 9, replace all with 0, and prepend to the digits
    newDigits.fill(0)
    newDigits.unshift(1)
  } else if (digits[len - 1] === 9) {
    // The last digit is 9, replace it with 0, remove this last digit, and call plusOne() recursively
    return [...plusOne1(newDigits.slice(0, len - 1)), 0]
  } else {
    // The last digit isn't 9, increment it directly
    newDigits[len - 1] += 1
  }

  return newDigits
}

export function plusOne(digits: number[]): number[] {
  return plusOne1(digits)
}
