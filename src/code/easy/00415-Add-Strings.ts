export function addStrings(num1: string, num2: string): string {
  // Initialize carry to 0
  let carry = 0
  let result = ''

  // Set the p1 and p2 to the last indices of num1 and num2, respectively
  let p1 = num1.length - 1
  let p2 = num2.length - 1

  while (p1 >= 0 || p2 >= 0 || carry === 1) {
    // p1 is non-negative, add the digit at p1 to carry
    if (p1 >= 0) {
      carry += num1.charCodeAt(p1--) - 48
    }
    // p2 is non-negative, add the digit at p2 to carry
    if (p2 >= 0) {
      carry += num2.charCodeAt(p2--) - 48
    }
    // Append the remainder of carry to the result string
    result = carry % 10 + result
    // Update the carry by dividing it by 10
    carry = Math.floor(carry / 10)
  }

  return result
}
