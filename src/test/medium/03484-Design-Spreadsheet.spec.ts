import { describe, expect, it } from 'vitest'
import { Spreadsheet } from '../../code/medium/03484-Design-Spreadsheet'

describe('spreadsheet test case 🥇', () => {
  it('should return the expected result', async () => {
    const spreadsheet = new Spreadsheet(3)
    expect(spreadsheet.getValue('=5+7')).toBe(12)
    spreadsheet.setCell('A1', 10)
    expect(spreadsheet.getValue('=A1+6')).toBe(16)
    spreadsheet.setCell('B2', 15)
    expect(spreadsheet.getValue('=A1+B2')).toBe(25)
    spreadsheet.resetCell('A1')
    expect(spreadsheet.getValue('=A1+B2')).toBe(15)
  })
})
