const DoublyLinkedList = require('../src/DoublyLinkedList');

describe('DoublyLinkedList', () => {
    let list;

    beforeEach(() => {
        list = new DoublyLinkedList();
    });

    describe('Initialization', () => {
        test('should initialize an empty list', () => {
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
            expect(list.size).toBe(0);
        });
    });

    describe('Insertion Methods', () => {
        test('push(): should add a node to the tail', () => {
            list.push(10);
            expect(list.head.value).toBe(10);
            expect(list.tail.value).toBe(10);
            expect(list.size).toBe(1);
        });

        test('push(): should update tail and size', () => {
            list.push(10);
            list.push(20);
            expect(list.tail.value).toBe(20);
            expect(list.size).toBe(2);
        });

        test('unshift(): should add a node to the head', () => {
            list.push(10);
            list.unshift(5);
            expect(list.head.value).toBe(5);
            expect(list.tail.value).toBe(10);
            expect(list.size).toBe(2);
        });

        test('insertAt(): should insert a node at a specific index', () => {
            list.push(10);
            list.push(30);
            list.insertAt(20, 1);
            expect(list.getAt(1).value).toBe(20);
            expect(list.size).toBe(3);
        });

        test('insertAt(): should handle index out of bounds', () => {
            list.insertAt(10, 1); // Out of bounds index
            expect(list.size).toBe(0); // List should remain empty
        });

        test('insertAt(): should insert at head when index is 0', () => {
            list.push(10);
            list.insertAt(5, 0);
            expect(list.head.value).toBe(5);
            expect(list.size).toBe(2);
        });

        test('insertAt(): should insert at tail when index is equal to size', () => {
            list.push(10);
            list.insertAt(20, 1);
            expect(list.tail.value).toBe(20);
            expect(list.size).toBe(2);
        });
    });

    describe('Deletion Methods', () => {
        test('pop(): should remove the tail node', () => {
            list.push(10);
            list.push(20);
            list.pop();
            expect(list.tail.value).toBe(10);
            expect(list.size).toBe(1);
        });

        test('pop(): should handle empty list', () => {
            expect(list.pop()).toBeNull();
        });

        test('shift(): should remove the head node', () => {
            list.push(10);
            list.push(20);
            list.shift();
            expect(list.head.value).toBe(20);
            expect(list.size).toBe(1);
        });

        test('shift(): should handle empty list', () => {
            expect(list.shift()).toBeNull();
        });

        test('deleteAt(): should delete a node at a specific index', () => {
            list.push(10);
            list.push(20);
            list.push(30);
            list.deleteAt(1);
            expect(list.getAt(1).value).toBe(30);
            expect(list.size).toBe(2);
        });

        test('deleteAt(): should handle index out of bounds', () => {
            expect(list.deleteAt(10)).toBeNull(); // Index out of bounds
        });
    });

    describe('Access Methods', () => {
        test('getAt(): should retrieve node value at specific index', () => {
            list.push(10);
            list.push(20);
            expect(list.getAt(1).value).toBe(20);
        });

        test('getAt(): should handle index out of bounds', () => {
            expect(list.getAt(10)).toBeNull(); // Index out of bounds
        });

        test('find(): should find and return node by value', () => {
            list.push(10);
            list.push(20);
            expect(list.find(20).value).toBe(20);
        });

        test('indexOf(): should return index of first occurrence of value', () => {
            list.push(10);
            list.push(20);
            expect(list.indexOf(20)).toBe(1);
        });
    });

    describe('Traversal Methods', () => {
        test('traverseForward(): should traverse from head to tail', () => {
            list.push(10);
            list.push(20);
            expect(list.traverseForward()).toBe('10 <-> 20');
        });

        test('traverseBackward(): should traverse from tail to head', () => {
            list.push(10);
            list.push(20);
            expect(list.traverseBackward()).toBe('20 <-> 10');
        });
    });

    describe('Size & Utility Methods', () => {
        test('getSize(): should return the current size of the list', () => {
            list.push(10);
            list.push(20);
            expect(list.getSize()).toBe(2);
        });

        test('isEmpty(): should return true if the list is empty', () => {
            expect(list.isEmpty()).toBe(true);
            list.push(10);
            expect(list.isEmpty()).toBe(false);
        });

        test('clear(): should remove all nodes from the list', () => {
            list.push(10);
            list.push(20);
            list.clear();
            expect(list.size).toBe(0);
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
        });
    });

    describe('Node Swap/Reverse Methods', () => {
        test('swapNodes(): should swap nodes at given indices', () => {
            list.push(10);
            list.push(20);
            list.push(30);
            list.swapNodes(0, 2);
            expect(list.head.value).toBe(30);
            expect(list.tail.value).toBe(10);
        });

        test('reverse(): should reverse the list', () => {
            list.push(10);
            list.push(20);
            list.reverse();
            expect(list.head.value).toBe(20);
            expect(list.tail.value).toBe(10);
        });
    });
});
