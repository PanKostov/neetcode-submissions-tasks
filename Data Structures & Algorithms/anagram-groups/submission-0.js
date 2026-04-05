class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const newArr = []
        const isAdded = new Set()
        console.log("Here")
       for(let i = 0; i < strs.length; i++) {
          const tempArr =[]
          let hasAnagram = false
          console.log(`Here 2 ${i}`, strs.length)
          
        for(let j = i + 1; j < strs.length; j++) {
            console.log("Here 3")
            if(!isAdded.has(j)) {
                hasAnagram = this.isAnagram(strs[i], strs[j])
                if(hasAnagram) {
                    tempArr.push(strs[j])
                    isAdded.add(j)
                }
            }
        }
        if(!isAdded.has(i)) {
            tempArr.push(strs[i])
            isAdded.add(i)
             newArr.push(tempArr)
        }

       
        
       }

       return newArr
    }

     isAnagram(s, t) {
         if (s.length !== t.length) {
            return false;
        }
        
        console.log(`Is anagram ${s} and ${t}`)
        return s.split('').sort().join('') == t.split('').sort().join('');
    }
}
