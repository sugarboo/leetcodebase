export function maximumWealth(accounts: number[][]): number {
  return accounts.reduce((max, account) => {
    const sum = account.reduce((sum, balance) => sum + balance, 0)
    return Math.max(max, sum)
  }, 0)
}
