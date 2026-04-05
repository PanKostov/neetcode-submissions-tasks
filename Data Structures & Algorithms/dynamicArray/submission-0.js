class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */

    constructor(capacity) {
        if(capacity <= 0) {
            throw new Error(`Capacity should be bigger than 0`)
        } 

        this.arr = new Array()
        this.numberOfElements = 0
        this.capacity = capacity
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        console.log(`Calling push back with ${n}`)
        this.numberOfElements +=1
        if(this.numberOfElements > this.capacity) {
            this.resize()
        }
        this.arr.push(n)
        console.log(`After push back ${JSON.stringify(this.arr)}`)
    }

    /**
     * @returns {number}
     */
    popback() {
        console.log(`Before pop back ${JSON.stringify(this.arr)}`)
        const n = this.arr[this.numberOfElements - 1]
        delete this.arr[this.numberOfElements - 1]
        this.numberOfElements -= 1
        console.log(`After pop back ${JSON.stringify(this.arr)}`)
        return n
    }

    /**
     * @returns {void}
     */
    resize() {
        const newCapacity = this.capacity * 2
     
        this.capacity = newCapacity
        console.log(`After resize ${newCapacity}`)
        console.log(`After esize ${JSON.stringify(this.arr)}`)
    }

    /**
     * @returns {number}
     */
    getSize() {
        console.log(`This size ${this.numberOfElements}`)
        return this.numberOfElements
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        console.log(`This capacity ${this.capacity}`)
        return this.capacity
    }
}
