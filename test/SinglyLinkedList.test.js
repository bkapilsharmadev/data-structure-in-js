const SinglyLinkedList = require('../src/SinglyLinkedList');

describe('Singly Linked List', () => {
    let list;

    beforeEach(() => {
        list = new SinglyLinkedList();
    })

    test('should initialize an empty list', () => {
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    test('should push a node to the end of the list', () => {
        list.push(10);
        expect(list.head.value).toBe(10);
        expect(list.tail.value).toBe(10);
        expect(list.length).toBe(1);
    });

    test('should pop a node from the end of the list', () => {
        list.push(10);
        list.push(20);
        expect(list.pop()).toBe(20);
        expect(list.tail.value).toBe(10);
        expect(list.length).toBe(1);
    });

    test('should unshift a node to the beginning of the list', () => {
        list.push(10);
        list.unshift(5);
        expect(list.head.value).toBe(5);
        expect(list.tail.value).toBe(10);
        expect(list.length).toBe(2);
    });

    test('should shift a node from the beginning of the list', () => {
        list.push(10);
        list.push(20);
        expect(list.shift()).toBe(10);
        expect(list.head.value).toBe(20);
        expect(list.length).toBe(1);
    });

    test('should get the value at a specific index', () => {
        list.push(10);
        list.push(20);
        expect(list.get(1)).toBe(20);
    });

    test('should set the value at a specific index', () => {
        list.push(10);
        list.push(20);
        list.set(1, 30);
        expect(list.get(1)).toBe(30);
    });

    test('should insert a node at a specific index', () => {
        list.push(10);
        list.push(30);
        list.insert(1, 20);
        expect(list.get(1)).toBe(20);
        expect(list.get(2)).toBe(30);
    });

    test('should remove a node at a specific index', () => {
        list.push(10);
        list.push(20);
        list.remove(0);
        expect(list.get(0)).toBe(20);
        expect(list.length).toBe(1);
    });

    test('should reverse the list', () => {
        list.push(10);
        list.push(20);
        list.reverse();
        expect(list.head.value).toBe(20);
        expect(list.tail.value).toBe(10);
    });

    test('should print the list correctly', () => {
        list.push(10);
        list.push(20);
        expect(list.print()).toBe('10 -> 20 -> null');
    });

    test('should handle pushing null value', () => {
        list.push(null);
        expect(list.head.value).toBeNull();
        expect(list.tail.value).toBeNull();
        expect(list.length).toBe(1);
    });

    test('should handle popping from an empty list', () => {
        expect(list.pop()).toBeNull();
    });

    test('should handle shifting from an empty list', () => {
        expect(list.shift()).toBeNull();
    });

    test('should return null for get with negative index', () => {
        expect(list.get(-1)).toBeNull();
    });

    test('should return null for set with index greater than length', () => {
        expect(list.set(10, 100)).toBeNull();
    });

    test('should handle inserting at an index greater than length', () => {
        list.insert(5, 20);
        expect(list.get(5)).toBeNull();
    });

    test('should handle removing from an empty list', () => {
        expect(list.remove(0)).toBeNull();
    });

    test('should handle reversing a single node list', () => {
        list.push(1);
        list.reverse();
        expect(list.head.value).toBe(1);
    });

    test('should handle printing an empty list', () => {
        expect(list.print()).toBe('');
    });

    test('should handle inserting at the end of an empty list', () => {
        list.insert(0, 10);
        expect(list.head.value).toBe(10);
        expect(list.tail.value).toBe(10);
        expect(list.length).toBe(1);
    });


    test('should handle inserting at the end with existing nodes', () => {
        list.push(10);
        list.push(20);
        list.insert(2, 30);
        expect(list.tail.value).toBe(30);
        expect(list.length).toBe(3);
    });

    test('should set value at a valid index after multiple operations', () => {
        list.push(10);
        list.push(20);
        list.push(30);
        list.set(1, 25);
        expect(list.get(1)).toBe(25);
    });

    test('should handle removing a node at a non-existent index in a multi-node list', () => {
        list.push(10);
        list.push(20);
        list.push(30);
        expect(list.remove(5)).toBeNull();
        expect(list.length).toBe(3);
    });

    test('should handle multiple consecutive operations', () => {
        list.push(10);
        list.push(20);
        list.unshift(5);
        list.insert(2, 15);
        expect(list.get(0)).toBe(5);
        expect(list.get(1)).toBe(10);
        expect(list.get(2)).toBe(15);
        expect(list.get(3)).toBe(20);
        expect(list.length).toBe(4);
        list.remove(2);
        expect(list.get(2)).toBe(20);
        expect(list.length).toBe(3);
    });

    test('should reverse a list with multiple nodes', () => {
        list.push(10);
        list.push(20);
        list.push(30);
        list.reverse();
        expect(list.head.value).toBe(30);
        expect(list.tail.value).toBe(10);
        expect(list.get(0)).toBe(30);
        expect(list.get(1)).toBe(20);
        expect(list.get(2)).toBe(10);
    });

    test('should print list with multiple nodes correctly', () => {
        list.push(10);
        list.push(20);
        list.push(30);
        expect(list.print()).toBe('10 -> 20 -> 30 -> null');
    });

    test('should handle large number of nodes', () => {
        for (let i = 0; i < 1000; i++) {
            list.push(i);
        }
        expect(list.length).toBe(1000);
        expect(list.get(999)).toBe(999);
        list.reverse();
        expect(list.head.value).toBe(999);
        expect(list.tail.value).toBe(0);
    });

    test('should reverse a list twice to restore original order', () => {
        list.push(10);
        list.push(20);
        list.push(30);
        list.reverse();
        list.reverse();
        expect(list.head.value).toBe(10);
        expect(list.tail.value).toBe(30);
        expect(list.get(0)).toBe(10);
        expect(list.get(1)).toBe(20);
        expect(list.get(2)).toBe(30);
    });

    test('should handle inserting at a negative index', () => {
        list.push(10);
        list.push(20);
        list.insert(-1, 15);
        expect(list.get(0)).toBe(10);
        expect(list.get(1)).toBe(20);
        expect(list.length).toBe(2);
    });

    test('should correctly get value from an index after multiple operations', () => {
        list.push(10);
        list.push(20);
        list.push(30);
        list.remove(1); // Remove 20
        list.insert(1, 15); // Insert 15
        list.reverse();
        expect(list.get(0)).toBe(30);
        expect(list.get(1)).toBe(15);
        expect(list.get(2)).toBe(10);
    });

    test('should set value at an index after multiple operations', () => {
        list.push(10);
        list.push(20);
        list.push(30);
        list.remove(1); // Remove 20
        list.set(1, 25); // Set value at index 1
        expect(list.get(1)).toBe(25);
    });

    test('should handle many sequential inserts', () => {
        for (let i = 0; i < 100; i++) {
            list.push(i);
        }
        expect(list.length).toBe(100);
        expect(list.tail.value).toBe(99);
        expect(list.get(99)).toBe(99);
    });

    test('should handle removing all nodes', () => {
        list.push(10);
        list.push(20);
        list.push(30);
        list.remove(0); // Remove 10
        list.remove(0); // Remove 20
        list.remove(0); // Remove 30
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    test('should handle operations on a list with one node', () => {
        list.push(10);
        list.set(0, 20); // Change value
        expect(list.get(0)).toBe(20);
        list.reverse();
        expect(list.get(0)).toBe(20);
        list.remove(0);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    test('should handle large values in nodes', () => {
        list.push(Number.MAX_SAFE_INTEGER);
        list.push(Number.MAX_SAFE_INTEGER - 1);
        expect(list.get(0)).toBe(Number.MAX_SAFE_INTEGER);
        expect(list.get(1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    });



})