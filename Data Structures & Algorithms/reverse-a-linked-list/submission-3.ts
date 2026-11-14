/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if(head === null || head.next === null) {
            return head
        }

        let curr = head


        while(curr.next != null) {
            let currNext = curr.next
            let currNextNext = currNext.next
            currNext.next = head
            curr.next = currNextNext
            head = currNext

            console.log(`Head ${JSON.stringify(head)}`)
        }   

        console.log(`Head 2 ${JSON.stringify(head)}`)

        return head
    }
}
