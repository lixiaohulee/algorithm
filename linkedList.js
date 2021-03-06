/**
 * @file linkedList.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */


/**
 * 节点构造函数
 * @param {*} 节点值
 */
function Node(value) {
    this.value = value
    this.next = null
}

/**
 * 链表构造函数
 */
function LinkedList() {
    this.headNode = null
}

//尾部添加节点
LinkedList.prototype.addNode = function(value) {
    if (value === null || undefined === value) {
        throw new Error('value type error')
    }

    if (this.headNode === null) {
        this.headNode = new Node(value)
        return this.headNode 
    }

    //找出尾节点
    let tempNode = this.headNode
    while(tempNode.next !== null) {
        tempNode = tempNode.next
    }

    tempNode.next = new Node(value)
    
    return this.headNode
}

//打印链表
LinkedList.prototype.printNode = function() {
    if (this.headNode === null) {
        console.log(null)
        return 
    }

    let tempNode = this.headNode
    let listStr = ''
    while(tempNode !== null) {
        listStr += tempNode.value
        tempNode.next !== null
            ? listStr += '=>'
            : null

        tempNode = tempNode.next
    }

    console.log(listStr)
}


//设置链表的长度
LinkedList.prototype.size = function() {
    let size = 0
    if (this.headNode === null) {
        return size
    }

    let tempNode = this.headNode
    while(tempNode !== null) {
        size++
        tempNode = tempNode.next
    }

    return size
}

//反转链表
LinkedList.prototype.reverse = function() {
    if (this.headNode === null || this.headNode.next === null) {
        return
    }

    let preNode = null,
        nextNode = null,
        headNode = this.headNode
    
    while(headNode !== null) {
        nextNode = headNode.next
        headNode.next = preNode
        preNode = headNode
        headNode = nextNode
    }

    this.headNode = preNode
}


//返回指定的节点
LinkedList.prototype.getNodeByIndex = function(index) {
    if (typeof index !== 'number') {
        throw new TypeError('index must be a number')
    }

    if (index <= 0 || index > this.size()) {
        throw new Error('index is inValid')
    }

    let postion = 1
    let currentNode = this.headNode

    while(currentNode !== null) {
        if (postion === index) {
            return currentNode
        }
        postion++
        currentNode = currentNode.next
    }
}


//删除指定的节点
LinkedList.prototype.delete = function(target) {
    const head = this.headNode
    if (!target || !head) {
        return 
    }

    let currentNode = head
    
    while(currentNode !== null) {
        if (currentNode === target && currentNode.value === target.value) {

        }else {
            currentNode = currentNode.next
        }
    }
}


//插入节点
LinkedList.prototype.insert = function(value, node) {
    if (!(node instanceof Node)) {
        throw new TypeError('node is not Node type')
    }
    if (this.headNode === null) {
        return new Node(value)
    }

    
}


const list = new LinkedList()

list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.addNode(5)
list.addNode(6)
list.addNode(7)


// console.log(list.getNodeByIndex(3).value)
list.printNode()
// list.reverse()
// list.printNode()