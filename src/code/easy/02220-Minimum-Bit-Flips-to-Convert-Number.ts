/**
 * To get minimum bit flips we find XOR of two number: which have set bits only at those places where A differs from B.
 * So, after getting the xor ( a ^ b ) , we need to count the number of set bits.
 *
 * @param {number} start
 * @param {number} goal
 * @returns {number} minimum number of bit flips to convert start to goal
 */
export function minBitFlips(start: number, goal: number): number {
  return (start ^ goal).toString(2).replace(/0/g, '').length
}
