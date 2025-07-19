class Node {
    constructor(d) {
        this.data = d;
        next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        var end = new Node(value);
        var n = this;
        while(n.next) {
            n = n.next;
        }
        n.next = end;
    }
}