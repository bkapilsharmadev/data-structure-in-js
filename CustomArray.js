// CUSTOM ARRAY IMPLEMENTATION
class CustomArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  //get element a specific index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    return this.data[index];
  }

  //push element to the end of the array
  push(elem) {
    this.data[this.length] = elem;
    this.length++;
    return this.length;
  }

  //remove the last element of the array
  pop() {
    if (this.length === 0) return undefined;
    const lastElem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElem;
  }

  //remove the first element of the array
  shift() {
    if (this.length === 0) return undefined;
    const firstElem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElem;
  }

  //add element to the beginning of the array
  unshift(elem) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = elem;
    this.length++;
    return this.length;
  }

  //insert element at a specific index
  insert(index, elem) {
    if (index < 0) return undefined;
    if (index >= this.length) {
      return this.push(elem);
    }

    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = elem;
    this.length++;
    return this.length;
  }

  //remove element at a specific index
  delete(index) {
    if (index < 0 || index >= this.length) return undefined;
    const elem = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return elem;
  }

  splice() {}

  slice() {}
}

const arr = new CustomArray();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log("arr>>> ", arr);
console.log("arr.get(2)>>> ", arr.get(2));
console.log("arr.get(10)>>> ", arr.get(10));

// -------------------------------------------
