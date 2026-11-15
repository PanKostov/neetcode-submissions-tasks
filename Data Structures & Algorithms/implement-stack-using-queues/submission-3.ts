class MyStack {
    q = new Queue()
    constructor() {
       
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.q.push(x)

        for(let i = 0; i < this.q.size()-1; i++) {
            const valueToPush = this.q.pop()
            this.q.push(valueToPush)
        }
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.q.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.q.front();
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.q.isEmpty();
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
