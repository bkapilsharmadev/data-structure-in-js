class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //add a new node to the end of the list and return the list
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //removes the last node from the list and returns it
  pop() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    let newTail = currentHead;

    while (currentHead.next) {
      newTail = currentHead;
      currentHead = currentHead.next;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.next = null;
      this.tail = newTail;
    }

    this.length--;
    return currentHead;
  }

  //add a new node to the beginning of the list and return the list
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  //removes the first node from the list and returns its value
  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode;
  }

  //returns the value of the node at the given index
  get(index) {
    if(index < 0 || index >= this.length) {
      return null;
    }

    let i = 0;
    let currentNode = this.head;

    while(currentNode.next) {
      if(index === i) {
        return currentNode;
      }
      currentNode = currentNode.next;
      i++;
    }

  }

  //updates the value of the node at the given index
  set(index, value) {}

  //inserts a new node at the given index
  insert(index, value) {}

  //removes the node at the given index
  remove(index) {}

  //reverse the list
  reverse() {}

  //print the list
  print() {}
}
