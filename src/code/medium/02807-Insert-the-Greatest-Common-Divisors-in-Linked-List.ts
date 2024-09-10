//  Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  // GCD calculator
  const gcd = (a: number, b: number): number => {
    if (!b) {
      return a
    }
    return gcd(b, a % b)
  }

  let node = head!
  while (node.next) {
    const curr = gcd(node.val, node.next.val)

    // Next node is the GCD, and following is node.next
    node.next = new ListNode(curr, node.next)

    // Now current node is next next
    node = node.next.next!
  }

  return head
}
