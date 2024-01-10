const LinkedList = require("./linked-list"); // Assuming you have a LinkedList implementation

class Queue {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  enqueue(val) {
    this._list.push(val);
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty.");
    }
    this.size--;
    return this._list.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty.");
    }
    return this._list.getAt(0);
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
