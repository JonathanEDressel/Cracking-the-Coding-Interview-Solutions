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
node.appendNode(50);
node.appendNode(50);
node.appendNode(50);
node.appendNode(50);
node.appendNode(50);
node.appendNode(5);
node.appendNode(5);
node.appendNode(4);
node.appendNode(20);
node.appendNode(20);
node.printNodes();

console.log('removeDuplicates: ' + node.removeDuplicates2());
node.printNodes();