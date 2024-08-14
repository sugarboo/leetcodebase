interface ToBeOrNotToBe {
  toBe: (val: any) => boolean
  notToBe: (val: any) => boolean
}

export function myExpect(val: any): ToBeOrNotToBe {
  const isEqual = (val, expected) => val === expected

  return {
    toBe: (expected: any) => {
      const result = isEqual(val, expected)
      if (!result) {
        throw new Error('Not Equal')
      }
      return result
    },
    notToBe: (expected: any) => {
      const result = !isEqual(val, expected)
      if (!result) {
        throw new Error('Equal')
      }
      return result
    },
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
