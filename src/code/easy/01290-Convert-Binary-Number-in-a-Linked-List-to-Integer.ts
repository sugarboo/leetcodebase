import type { ListNode } from '../../utils/ListNode'

export function getDecimalValue(head: ListNode | null): number {
  const vals: number[] = []

  let node = head
  while (node) {
    vals.push(node.val)
    node = node.next
  }

  return vals.reduce((acc, curr, i) => acc + curr * 2 ** (vals.length - 1 - i), 0)
}
