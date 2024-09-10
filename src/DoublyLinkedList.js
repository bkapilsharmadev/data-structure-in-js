class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // ========= INSERTION METHODS ===========
    // Adds a node to the tail of the list.
    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
        return this;
    }

    // Adds a node to the head of the list.
    unshift(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
        return this;
    }

    // Inserts a node at a specific position/index in the list.
    insertAt(value, index) {
        if(index < 0 || index > this.size) {
            return null;
        }

        if(index === 0) {
            this.unshift(value);
            return this;
        }

        if(index === this.size) {
            this.push(value);
            return this;
        }

        let i = 0;
        let currentNode = this.head;

        while(i !== index) {
            currentNode = currentNode.next;
            i++;
        }

        const newNode = new Node(value);
        newNode.next = currentNode;
        newNode.prev = currentNode.prev;
        currentNode.prev.next = newNode;
        currentNode.prev = newNode;

        this.size++;
        return this;
    }

    // ========= DELETION METHODS ===========
    // Removes a node from the tail of the list.
    pop() {

    }

    // Removes a node from the head of the list.
    shift() {

    }

    // Deletes a node at a specific position/index in the list.
    deleteAt() {

    }

    // ========= ACCESS METHODS ===========
    // Retrieves the node at a specific position/index.
    getAt(index) {

    }

    // Finds and returns the first node that contains the given data.
    find(value) {

    }

    // Returns the index of the first node that contains the given data.
    indexOf(value) {

    }

    // ========= TRAVERSAL METHODS ===========
    // Traverses and prints/returns the list from head to tail.
    traverseForward() {

    }

    // Traverses and prints/returns the list from tail to head.
    traverseBackward() {

    }


    // ========= SIZE & UTILITY METHODS ===========
    // Returns the current size (number of nodes) of the list.
    getSize() {

    }

    // Returns true if the list is empty, false otherwise.
    isEmpty() {

    }

    // Clears the entire list (removes all nodes).
    clear() {

    }


    // ========= NODE SWAP/REVERSE METHODS ===========
    //  Swaps the positions of two nodes at the given indices.
    swapNodes(index1, index2) {

    }

    // Reverses the list by reversing the direction of all next and prev pointers.
    reverse() {

    }


}