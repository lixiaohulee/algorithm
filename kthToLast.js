/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    if (head === null) return 0
    const getSize = function(head) {
        if (!head) return 0
        let size = 0
        let temp = head
        while(temp) {
            size++
            temp = temp.next
        }
        return size
    }

    const size = getSize(head)
    let i = 0
    while(size - i !== k && head) {
        head = head.next
        i++
    }
    return head.val
};




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    let fast = head,
        slow = head

    while(--k > 0) {
        fast = fast.next
    }

    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }

    return slow.val
};