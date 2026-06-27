interface ToBeOrNotToBe {
  toBe: (val: unknown) => boolean
  notToBe: (val: unknown) => boolean
}

export function myExpect(val: unknown): ToBeOrNotToBe {
  const isEqual = (val: unknown, expected: unknown) => val === expected

  return {
    toBe: (expected: unknown) => {
      const result = isEqual(val, expected)
      if (!result) {
        throw new Error('Not Equal')
      }
      return result
    },
    notToBe: (expected: unknown) => {
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
