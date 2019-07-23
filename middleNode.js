/**
 * @param head: the head of linked list.
 * @return: a middle node of the linked list
 */
 
const getSize = function(head) {
    let current = head
    let size = 0
    while(current) {
        size++
        current = current.next
    }
    
    return size
}
const middleNode = function (head) {
    // write your code here
    const size = getSize(head)
    
    const stopIndex = size % 2 === 0 ? size / 2 : (size + 1) / 2
    
    let index = 1
    let current = head
    while(current) {
        if (index === stopIndex) {
            return current
        }
        index++
        current = current.next
    }
}