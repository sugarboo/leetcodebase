export class ProductOfNumbers {
  // Initialize with 1 as a neutral element for multiplication
  products: number[] = [1]

  add(num: number) {
    // If add 0, it breaks the product, so reset the prefix product array
    if (num === 0) {
      this.products = [1]
    } else {
      // Append the new product: product of all previous numbers * new number
      const lastProduct = this.products[this.products.length - 1]
      this.products.push(lastProduct * num)
    }
  }

  getProduct(k: number) {
    const n = this.products.length
    // If k is greater than or equal to the number of added numbers, it means there are 0s in the added numbers, so the product is 0
    if (k >= n) {
      return 0
    }
    // product of the last k numbers = last prefix product / the prefix product of the number before the last k numbers
    return this.products[n - 1] / this.products[n - k - 1]
  }
}
