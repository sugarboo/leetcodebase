export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const ans: number[] = []

  nums1.forEach((num1) => {
    const i = nums2.indexOf(num1)
    if (i !== -1) {
      const nextGreaterElement = (nums2.slice(i)).find(num2 => num2 > num1)
      ans.push(nextGreaterElement ?? -1)
    } else {
      ans.push(-1)
    }
  })

  return ans
}
