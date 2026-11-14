class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const arrLength = arr.length

        let i = 0
        let j = 0
        let index = 0

        while(i < arrLength - 1) {
            console.log("NUmber ", arr[i])
            let max = 0
            j = i + 1;

            while(j < arrLength) {
                if(arr[j] > max) {
                    max = arr[j]
                    index = j
                }
                j++
            }

            console.log(`Found max ${max} for index ${i} to index ${index}`)

            for(let k = i; k < index; k++) {
                arr[k] = max;
            }


            i++;
        }

          
          arr[arrLength - 2] = arr[arrLength-1]
          arr[arrLength-1] = -1
          
          return arr
    }
}
