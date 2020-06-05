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
var sortList = function(head) {
    if (head === null) return null 
    let tempArr = []

    while(head) {
        tempArr.push(head)
        head = head.next 
    }

    tempArr.sort((pre, next) => {
        return pre.val - next.val
    })

    for(let i = 0; i <= tempArr.length -1; i++) {
        tempArr[i].next = tempArr[i+1]
    }

    return tempArr[0]
};