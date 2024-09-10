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

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      newTail.tail = null;
      this.tail = newTail;
    }

    this.length--;
    return currentNode.value;

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
      return null;
    }

    let currenthead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return currenthead.value;
  }

  //returns the value of the node at the given index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let i = 0;
    let currentNode = this.head;

    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode.value;
  }

  //updates the value of the node at the given index
  set(index, value) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let i = 0;
    let currentNode = this.head;

    while (i !== index) {
      currentNode = currentNode.next;
      i++
    }

    currentNode.value = value;
    return true;
  }

  //inserts a new node at the given index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      this.unshift(value);
      return this;
    }

    if (index === this.length) {
      this.push(value);
      return this;
    }

    let i = 0;
    let currentNode = this.head;
    let adjacentNode = null;

    while (i !== index) {
      adjacentNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    const newNode = new Node(value);
    newNode.next = currentNode;
    adjacentNode.next = newNode;

    this.length++;
    return this;
  }

  //removes the node at the given index
  remove(index) {
    if(index < 0 || index >= this.length) {
      return null;
    }

    if(index === 0) {
      let removedValue = this.shift();
      return removedValue;
    }

    if(index === this.length - 1) {
      let removedValue = this.pop();
      return removedValue;
    }

    let i = 0;
    let currentNode = this.head;
    let adjacentNode = null;

    while(i !== index) {
      adjacentNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    adjacentNode.next = currentNode.next;
    currentNode.next = null;
    this.length--;

    return currentNode.value;
  }

  //reverse the list
  reverse() {
    if(!this.head) {
      return null;
    }

    if(this.head === this.tail) {
      return this;
    }

    this.tail = this.head;

    let prev, curr, next;
    prev = null;
    curr = this.head;
    next = null;

    while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;

    return this;
  }

  //print the list
  print() {
    if(!this.head) {
      return '';
    }

    let output = ``;
    let currentNode = this.head;

    while(currentNode) {
      output += `${currentNode.value} -> `
      currentNode = currentNode.next;
    }

    output += 'null';

    return output;
  }
}
