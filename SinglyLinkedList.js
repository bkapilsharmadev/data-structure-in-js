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
      return null;
    }

    let currentNode = this.head;
    let newTail = currentNode;

    while(currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.tail = null;
      this.tail = newTail;
    }

    this.length--;
    return currentNode;

  }

  //add a new node to the beginning of the list and return the list
  unshift(value) {
    const newNode = new Node(value);

    if(!this.head) {
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

  }

  //returns the value of the node at the given index
  get(index) { }

  //updates the value of the node at the given index
  set(index, value) { }

  //inserts a new node at the given index
  insert(index, value) { }

  //removes the node at the given index
  remove(index) { }

  //reverse the list
  reverse() { }

  //print the list
  print() { }
}
