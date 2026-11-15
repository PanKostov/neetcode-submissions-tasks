class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const count = [0,0]
        let sandwichesToBeEaten = sandwiches.length

        for(const student of students) {
            count[student]++;
        }

        for(const sandwich of sandwiches) {
            if(count[sandwich] > 0) {
                count[sandwich]--
                sandwichesToBeEaten--
            } else {
                break
            }
        } 

        return sandwichesToBeEaten
    }
}
