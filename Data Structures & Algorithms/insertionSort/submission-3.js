/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if(pairs.length === 0) {
            return []
        }

        const arrayToReturn = [[...pairs]]
        for(let i = 1; i < pairs.length; i++) {
            let k = i
            while(k > 0 && pairs[k].key < pairs[k-1].key) {
                const currentMap = pairs[k]
                pairs[k] = pairs[k-1]
                pairs[k-1] = currentMap
                k--
            }
            arrayToReturn.push([...pairs])
        }

        return arrayToReturn
    }
}
