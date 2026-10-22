class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
      return  this.clear(s).toLowerCase() === this.reverse(s).toLowerCase()
    }

    reverse(s){
        let reverseString = ""
        for(let j = s.length -1; j >=0 ; j--) {
            const char = s.charAt(j)
            if(this.isAlphaNumeric(char)) {
            reverseString+= char}
        }
        return reverseString
    }

    clear(s) {
        let clearString = ""
        for(const char of s) {
            if(this.isAlphaNumeric(char)) {
                clearString+= char
            }
        }
        return clearString
    }

     isAlphaNumeric(c) {
        return this.isLetter(c) || this.isCharNumber(c)
    }

    isLetter(c) {
        const isLetter = c.toLowerCase() != c.toUpperCase();
        return isLetter;
    }

   isCharNumber(char: string): boolean {
        const code = char.charCodeAt(0);
        return code >= 48 && code <= 57;
}  
}
