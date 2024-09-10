// Stack Implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack.pop();
  }

  peek() {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    }

    return false;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
}
