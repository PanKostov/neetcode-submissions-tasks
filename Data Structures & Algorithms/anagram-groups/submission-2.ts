class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const response = {}
        for(const word of strs) {
            const count = new Array(26).fill(0);
            for(const char of word) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                count[index]++
            }

            const stringKey = count.join(",")
           
            if(!response[stringKey]) {
                response[stringKey] = []
            } 

            response[stringKey].push(word)

        }

        return Object.values(response);
    }
}
