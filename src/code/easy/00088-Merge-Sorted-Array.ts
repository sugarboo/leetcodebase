export function merge(nums1: number[], nums2: number[], m?: number, n?: number): number[] {
  return [...nums1, ...nums2].filter(num => !!num).sort((a, b) => a - b)
}
