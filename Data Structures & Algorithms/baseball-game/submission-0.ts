class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack = []

        for(const operation of operations) {
            if(!isNaN(Number(operation))) {
                stack.push(Number(operation))
            } 
            else if (operation === "+") {
                stack.push(stack[stack.length-2] + stack[stack.length-1])
            }
            else if (operation === "C") {
                stack.pop()
            } 
            else if (operation === "D") {
                stack.push(2*stack[stack.length-1])
            } 
        }

        let sum = 0
        for(const n of stack) {
            sum += n
        }

        return sum
    }
}
