//Linked List

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.size = 0;
    }

    appendNode(val) {
        if(!this.head) {
            this.head = new Node(val);
        }
        else {
            var curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = new Node(val);
        }
        this.size++;
    }

    deleteValue(val) {
        var curr = this.head;
        var prev = curr;

        while(curr.next && curr.val !== val) {
            prev = curr;
            curr = curr.next;
        }

        if(curr && curr.val === val) {
            prev.next = curr.next;
            curr = null;
            this.size--;
        }
        return this.size;
    }

    // Problem 2.1
    // Time Complexity - O(n)
    // Space Complexity - O(1)
    removeDuplicates() {
        var curr = this.head.next;
        var track = {};
        while (curr) {
            if(curr.val in track) {
                this.deleteValue(curr.val);
            }
            else {
                track[curr.val] = 1;
            }
            curr = curr.next;
        }
        return this.size;
    }

    // Without temporary buffer
    // Time Complexity - O(n)
    // Space Complexity - O(1)
    removeDuplicates2() {
        var curr = this.head.next;
        var check = this.head.next;
        while(curr.next) {
            if(!check) {
                curr = curr.next;
                check = this.head.next;
            }
            if(check === curr) {
                check = check.next;
                continue;
            }
            if(check.val == curr.val) {
                curr = curr.next;
                this.deleteValue(check.val);
            }
            else
                check = check.next;
        }
        return this.size;
    }

    // Problem 2.2
    // Time Complexity - O(n)
    // Space Complexity - O(1)
    findKthIndex(idx) {
        if(idx > this.size || idx < 0)
            return -1;
        var curr = this.head.next;
        var count = this.size;
        return this.findIdx(curr, idx, count)
    }

    findIdx(node, idx, count) {
        if(!node.next || idx === count)
            return node.val;
        return this.findIdx(node.next, idx, count-1);
    }

    printNodes() {
        var res = [];
        var curr = this.head.next;
        while(curr) {
            res.push(curr.val)
            curr = curr.next;
        }
        console.log('nodes: ' + res);
    }
}

var node = new LinkedList();
node.appendNode(1);
node.appendNode(5);
node.appendNode(10);
node.appendNode(15);
node.appendNode(20);
node.appendNode(25);
node.appendNode(30);
node.appendNode(35);
node.appendNode(40);
node.appendNode(45);
node.printNodes();

console.log('findKthIndex(0) - ', node.findKthIndex(0));
console.log('findKthIndex(1) - ', node.findKthIndex(1));
console.log('findKthIndex(2) - ', node.findKthIndex(2));
console.log('findKthIndex(5) - ', node.findKthIndex(5));
console.log('findKthIndex(500) - ', node.findKthIndex(500));
console.log('findKthIndex(-2) - ', node.findKthIndex(-2));
console.log('findKthIndex(node.size) - ', node.findKthIndex(node.size));
console.log('removeDuplicates: ' + node.removeDuplicates2());
node.printNodes();