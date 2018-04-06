/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
    //head为起始点内存空间的地址
    let arr = [];
    while(head) {
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}