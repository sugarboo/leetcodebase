export class Spreadsheet {
  private data = new Map<string, number>()

  constructor(_rows: number) {

  }

  setCell(cell: string, value: number): void {
    this.data.set(cell, value)
  }

  resetCell(cell: string): void {
    this.data.delete(cell)
  }

  getValue(formula: string): number {
    let ans = 0
    for (const cell of formula.slice(1).split('+')) {
      if (cell[0] >= 'A' && cell[0] <= 'Z') {
        ans += this.data.get(cell) ?? 0
      } else {
        ans += Number.parseInt(cell)
      }
    }
    return ans
  }
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
