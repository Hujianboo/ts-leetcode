import { ListNode } from "../public/utils";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // 同时遍历两个链表，
  // 比对大小，小的接到新的链表中，并且对应的链表节点后移
  // 当某个已经遍历完了后，循环结束跳出
  // 将剩下的没遍历完的接上
  let index1 = list1,
    index2 = list2;
  let dummy = new ListNode();
  let cur = dummy;
  while (index1 && index2) {
    if (index1.val < index2.val) {
      cur.next = index1;
      index1 = index1.next;
    } else {
      cur.next = index2;
      index2 = index2.next;
    }
    cur = cur.next;
  }
  if (index1) {
    cur.next = index1;
  }
  if (index2) {
    cur.next = index2;
  }
  return dummy.next;
}
