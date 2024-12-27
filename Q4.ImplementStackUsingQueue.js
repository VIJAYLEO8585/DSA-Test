class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
        return `${item} Added`;
    }

    dequeue() {
        if (this.frontIndex !== this.backIndex) {
            const item = this.items[this.frontIndex];
            this.frontIndex++;
            return `${item} Removed`;
        }
        return "Underflow";
    }

    peek() {
        if (this.frontIndex !== this.backIndex) {
            return this.items[this.frontIndex];
        }
        return "Underflow"; 
    }

    isEmpty() {
        return this.frontIndex === this.backIndex;
    }
}

class StackUsingQueue {
    constructor() {
        this.queue = new Queue();
        this.count = 0; 
    }

    push(item) {
        let newQueue = new Queue();
        newQueue.enqueue(item);

       
        for (let i = this.queue.frontIndex; i < this.queue.backIndex; i++) {
            newQueue.enqueue(this.queue.items[i]);
        }

        this.queue = newQueue;
        this.count++;
        return `${item} Pushed`;
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow"; 
        }
        this.count--;
        return this.queue.dequeue();
    }

    peek() {
        return this.queue.peek();
    }

    isEmpty() {
        return this.count === 0;
    }
}
const stack = new StackUsingQueue();
console.log(stack.push(10)); 
console.log(stack.push(20)); 
console.log(stack.push(30));
 console.log(stack.pop());  
console.log(stack.peek());  
console.log(stack.isEmpty());
