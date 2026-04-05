class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        let stackLength = 0
        let stackPushed = 0
        if(s.length <= 1) {
            return false
        }

        for(let i = 0; i < s.length; i++) {
            if(s.charAt(i) == '(' || s.charAt(i) == "[" || s.charAt(i) == '{') {
                stack.push(s.charAt(i))
                stackLength++
                stackPushed++
            } else {
                console.log(`Compare ${s.charAt(i)} with ${stack[stackLength-1]}`)
                if(this.getOpposite(s.charAt(i)) == stack[stackLength-1]) {
                    stackLength--
                    stack.pop()
                }
                 else {
                    return false
                 }
            }
        }

        if(stackPushed > s.length /2 ) {
            return false
        }
        return true
    }

    getOpposite(c) {
        if(c == ']') {
            return '['
        }

        if(c == '}') {
            return '{'
        }

        if(c == ')') {
            return '('
        }
    }


}
