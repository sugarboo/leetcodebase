export function numUniqueEmails(emails: string[]): number {
  const uniqueEmails = new Set<string>()

  emails.forEach((email) => {
    const [local, domain] = email.split('@')
    const cleanedLocal = local.split('+')[0].replace(/\./g, '')
    uniqueEmails.add(`${cleanedLocal}@${domain}`)
  })

  return uniqueEmails.size
}
