class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const matrixLength = matrix.length
        const insideLength = matrix[0].length

        let low = 0
        let high = matrixLength*insideLength-1

        while(low <= high) {
            let middleIndex = Math.floor((low+high)/2)

            let secondPosition = middleIndex % insideLength
            let firstPosition = (middleIndex - secondPosition) / insideLength

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
