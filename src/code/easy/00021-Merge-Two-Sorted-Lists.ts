/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode {
  val: number
  next: ListNode | null
}

function mergeTwoSortedLists1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) {
    return list2
  }
  else if (list2 === null) {
    return list1
  }
  else if (list1.val < list2.val) {
    list1.next = mergeTwoSortedLists1(list1.next, list2)
    return list1
  }
  else {
    list2.next = mergeTwoSortedLists1(list1, list2.next)
    return list2
  }
}

function mergeTwoSortedLists2<T>(list1: T[], list2: T[]): T[] {
  return [...list1, ...list2].sort((a, b) => Number(a) - Number(b))
}

export function mergeTwoSortedLists<T>(list1: T[], list2: T[]): T[] {
  return mergeTwoSortedLists2(list1, list2)
}
