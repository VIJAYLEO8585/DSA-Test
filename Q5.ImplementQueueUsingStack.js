class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow"; 
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return "Underflow"; }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class QueueUsingStack {
    constructor() {
        this.stack = new Stack();
    }

    enqueue(element) {
        this.stack.push(element);
        return `${element} Added`;
    }

    dequeue() {
        if (this.stack.isEmpty()) {
            return "Underflow";
        }
        const topElement = this.stack.pop();
        if (this.stack.isEmpty()) {
            return `${topElement} Removed`;
        }
        const dequeuedElement = this.dequeue();
        this.stack.push(topElement);
        return dequeuedElement;
    }

    peek() {
        if (this.stack.isEmpty()) {
            return "Underflow"; 
        }
        const topElement = this.stack.pop();
        if (this.stack.isEmpty()) {
            this.stack.push(topElement);
            return topElement;
        }
        const frontElement = this.peek();
        this.stack.push(topElement);
        return frontElement;
    }

    isEmpty() {
        return this.stack.isEmpty();
    }
}
const queue = new QueueUsingStack();
console.log(queue.enqueue(10)); 
console.log(queue.enqueue(20)); 
console.log(queue.enqueue(30)); 
console.log(queue.dequeue());   
console.log(queue.peek());      
console.log(queue.isEmpty());   
