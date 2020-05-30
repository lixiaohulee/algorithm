/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null || head.next === null || head.next.next === null) return head
    let oddHead = head,
        evenHead = head.next,
        tempHead = head.next

    while(oddHead.next && evenHead.next) {
        oddHead.next = evenHead.next
        oddHead = oddHead.next
        evenHead.next = oddHead.next
        evenHead = evenHead.next
    }

    oddHead.next = tempHead
    return head
};