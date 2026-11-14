class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack = []
        let sum = 0

        for(const operation of operations) {
            if(!isNaN(Number(operation))) {
                const numberToPush = Number(operation)
                stack.push(numberToPush)
                sum += numberToPush
            } 
            else if (operation === "+") {
                const numberToPush = stack[stack.length-2] + stack[stack.length-1]
                stack.push(numberToPush)
                sum += numberToPush
            }
            else if (operation === "C") {
                sum -=  stack.pop()
            } 
            else if (operation === "D") {
                const numberToPush = 2*stack[stack.length-1]
                stack.push(numberToPush)
                sum += numberToPush
            } 
        }

      

        return sum
    }
}