class MinStack {
    constructor() {
        this.length = 0
        this.stack = []
        this.minStack = []
        this.minStackLength = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        console.log(`Is val ${val} <= ${this.getMin()}`)
        if(this.length == 0 || val <= this.getMin()) {
            this.pushMinStack(val)
        }

        this.stack[this.length] = val
        this.length++
    }

    pushMinStack(val) {
        this.minStack[this.minStackLength] = val
        this.minStackLength++
    }

    /**
     * @return {void}
     */
    pop() {
        let valueToPop = this.stack[this.length-1]
        console.log(`Going to pop ${valueToPop} and ${this.getMin()}`)
        if(valueToPop == this.getMin()) {
            this.minStackLength--
        }
        console.log(`This minStack ${JSON.stringify(this.minStack)}`)
        this.length--
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStackLength-1] ?? 0
    }
}
