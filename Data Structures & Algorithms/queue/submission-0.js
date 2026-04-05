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
        console.log("After append ", this.head)
        console.log("After append tail val ", this.tail.val)
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
        console.log("After append left ", this.head)
        this.length++
    }

    /**
     * @return {void}
     */
    pop() {
        console.log("Calling pop")
        if(this.length == 0) {
            return -1
        }
        const valueToReturn = this.tail.val
        console.log("This length ", this.length)
        if(this.length == 1) {
            this.length = 0
            this.head = null
            this.tail = null
            return valueToReturn
        }

        this.tail = this.tail.prev
        this.tail.next = null
        this.length--
        console.log("After pop ", this.head)
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

        console.log("After pop left", this.head)
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
