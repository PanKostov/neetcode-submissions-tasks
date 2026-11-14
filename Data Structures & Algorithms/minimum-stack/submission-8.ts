class MinStack {
    stack = []
    minStack = []

    
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)

        let minStackLength = this.minStack.length
        let minValueToPush = Math.min(val, minStackLength === 0 ? val : this.minStack[minStackLength-1])

        this.minStack.push(minValueToPush)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
