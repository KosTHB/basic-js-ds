const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.last = null;
  }

  push(data) {
    this.last = new Stack(data, this.last);
  }

  pop() {
    let res;
    if(this.last != null) {
      res = this.last.data;
      this.last = this.last.prev;
    }
    return res;
  }

  peek() {
    return this.last.data;
  }
}

module.exports = {
  Stack
};
