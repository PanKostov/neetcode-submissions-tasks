class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index >= this.length || index < 0) {
            return -1
        }

        let cur = this.head
        let currentIndex = 0
        while(currentIndex < index) {
            cur = cur.next
            currentIndex++
        }

        return cur.value
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newLinkedNode
        if(this.head === null) {
            newLinkedNode = new LinkedNode(val, null)
            this.tail = newLinkedNode 
        } else {
            newLinkedNode = new LinkedNode(val, this.head)
         }


        this.head = newLinkedNode
        this.length++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newLinkedNode = new LinkedNode(val, null)

        if(this.tail == null) {
            this.head = newLinkedNode
            this.tail = newLinkedNode
        }
         else {
            this.tail.next = newLinkedNode
            this.tail = newLinkedNode 
            }
        this.length++

    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        console.log("Remove vals ", this.getValues())
        console.log("Remove with index ", index)
        if(index >= this.length || index < 0) {
            return false
        }
        let cur = this.head
        let currentIndex = 0
   

        if(index === 0) {
            this.head = cur.next
            cur.next = null
        } else {
            console.log("Cur ", cur)
            console.log("Cur next ", cur.next)
            while(currentIndex < index -1) {
                console.log("While cur ", cur)
                cur = cur.next
                currentIndex++
            }
            console.log("Remove cur value ", cur.value)
            if(cur.next == this.tail) {
                this.tail = cur
                cur.next = null
            }
             else {
                cur.next = cur.next.next 
            }

        }

        this.length--
  
        return true
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = []
        if(this.length === 0) {
            return values
        }
        let cur = this.head
        values.push(cur.value)
        while(cur.next !== null) {
            values.push(cur.next.value)
            cur = cur.next
        }

    return values
    }
}

class LinkedNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}
