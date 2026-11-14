
 // Definition for singly-linked list.
//   class ListNode {
//     val
//     next

//     constructor(val = 0, next = null) {
//           this.val = val;
//           this.next = next;
//       }
//   }
 

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        const arr = []
        let curr = head
        while(curr != null) {
            arr.push(curr)
            curr = curr.next
        }

        if(arr.length <= 1) {
            return head
        }

        console.log(`Arr ${JSON.stringify(arr)}`)
        console.log(`Arr ${arr[arr.length-1]}`)
        const arrLength = arr.length
        let newHead = arr[arrLength-1]
        newHead.next = arr[arrLength-2]
        
        for(let i = arrLength-2; i>= 0; i--) {
            let curr = arr[i]
            if(i > 0) {
            curr.next = arr[i-1] }
             else {curr.next=null}
        }
        return newHead
    }
}
