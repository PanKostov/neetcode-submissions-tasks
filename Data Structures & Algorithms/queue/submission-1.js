class MyDeque {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.length === 0
    }

    /**
     * @param {number} value
     */
    append(value) {
        const node = new Node(value, null, null)

        if(this.tail == null) {
            this.head = node
        } else {
            node.prev = this.tail
            this.tail.next = node
        }

        this.tail = node
        this.length++
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const node = new Node(value, null, null)
        
        if(this.head == null) {
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
        }

        this.head = node
        this.length++
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.length == 0) {
            return -1
        }
        const valueToReturn = this.tail.val
        if(this.length == 1) {
            this.length = 0
            this.head = null
            this.tail = null
            return valueToReturn
        }

        this.tail = this.tail.prev
        this.tail.next = null
        this.length--

        return valueToReturn
    }

    /**
     * @return {number}
     */
    popleft() {
        if(this.length == 0) {
            return -1
        }
        const valueToReturn = this.head.val
        if(this.length == 1) {
            this.length = 0
            this.head = null
            this.tail = null
            return valueToReturn
        }

        this.head = this.head.next
        this.head.prev = null
        this.length--

        return valueToReturn

    }
}

class Node {
    constructor(val, next, prev) {
        this.val = val
        this.next = next
        this.prev = prev
    }
}
