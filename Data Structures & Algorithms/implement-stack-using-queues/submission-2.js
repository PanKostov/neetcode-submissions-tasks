class MyStack {
    constructor() {
        this.queue2 = new Queue()
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue2.push(x)
        
          for (let i = 0; i < this.queue2.size()-1; i++) {
            this.queue2.push(this.queue2.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.queue2.size() === 0) {
            return -1
        }

        const valueToReturn = this.queue2.pop()

        return valueToReturn
    }

    /**
     * @return {number}
     */
    top() {
        console.log("Will return front ", this.queue2.front())
        return this.queue2.front()
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue2.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
