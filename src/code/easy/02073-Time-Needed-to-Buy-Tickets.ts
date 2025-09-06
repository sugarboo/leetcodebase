export function timeRequiredToBuy(tickets: number[], k: number): number {
  const tk = tickets[k]

  let ans = 0
  for (let i = 0; i < tickets.length; i++) {
    // Calculate the time needed to buy tickets for the current person
    // If the current person is before or at the person with the ticket count k,
    // they can buy at most tk tickets.
    // If the current person is after the person with the ticket count k,
    // they can buy at most tk - 1 tickets.
    ans += Math.min(tickets[i], (i <= k ? tk : tk - 1))
  }

  return ans
}
