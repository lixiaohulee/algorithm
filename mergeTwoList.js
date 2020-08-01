/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let head = curNode = new ListNode(-1)
    while(l1 && l2) {
        if (l1.val < l2.val) {
            curNode.next = l1
            l1 = l1.next
        }else {
            curNode.next = l2 
            l2 = l2.next
        }
        curNode = curNode.next
    }

    if (l1) {
        curNode.next = l1
    }

    if (l2) {
        curNode.next = l2
    }

    return head.next
};