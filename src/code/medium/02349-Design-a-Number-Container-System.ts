export class NumberContainers {
  // Storage for the number at each index
  private indexToNumber: Map<number, number> = new Map()
  // Storage for the sorted indices of each number
  private numberToIndices: Map<number, Set<number>> = new Map()
  // Storage for minimum index of each number
  private numberToMinIndex: Map<number, number> = new Map()

  // Change the number at the given index
  change(index: number, number: number): void {
    // If the index already has a number, remove it from the maps
    if (this.indexToNumber.has(index)) {
      const oldNumber = this.indexToNumber.get(index)!
      const indices = this.numberToIndices.get(oldNumber)!
      indices.delete(index)

      // Update minimum index if needed
      if (indices.size === 0) {
        this.numberToIndices.delete(oldNumber)
        this.numberToMinIndex.delete(oldNumber)
      } else if (index === this.numberToMinIndex.get(oldNumber)) {
        this.numberToMinIndex.set(oldNumber, Math.min(...indices))
      }
    }

    // Set the new number
    this.indexToNumber.set(index, number)

    // Add to indices set
    if (!this.numberToIndices.has(number)) {
      this.numberToIndices.set(number, new Set())
    }
    this.numberToIndices.get(number)!.add(index)

    // Update minimum index
    const currentMin = this.numberToMinIndex.get(number)
    if (currentMin === undefined || index < currentMin) {
      this.numberToMinIndex.set(number, index)
    }
  }

  // Find the smallest index of the given number
  find(number: number): number {
    return this.numberToMinIndex.get(number) ?? -1
  }
}
