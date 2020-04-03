/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let cur = head
    while(cur && cur.next) {
        if (cur.val === cur.next.val) {
            let deleteNode = cur.next
            cur.next = cur.next.next
            deleteNode = null
        }else {
            cur = cur.next
        }
    }
    return head
};
