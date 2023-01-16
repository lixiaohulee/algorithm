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

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        // fast.next === null 表示fast是最后一个节点了
        fast = fast.next.next;
        slow = slow.next;
    } 

    return slow;
};
