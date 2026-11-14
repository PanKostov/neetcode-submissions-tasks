class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const ROWS = matrix.length
        const COLS = matrix[0].length

        let low = 0
        let high = ROWS*COLS-1

        while(low <= high) {
            let middleIndex = Math.floor((low+high)/2)

            let secondPosition = middleIndex % COLS
            let firstPosition = (middleIndex - secondPosition) / COLS

            if(target < matrix[firstPosition][secondPosition]) {
                high = middleIndex - 1
            }

            else if(target > matrix[firstPosition][secondPosition]) {
                low = middleIndex + 1
            }

             else {
                return true
             }
        }


        return false
    }

}
