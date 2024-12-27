class Queue{
    constructor(){
        this.items={};
        this.frontIndex=0;
        this.backIndex=0;
        
    }
    enqueue(item){
        this.items[this.backIndex]=item;
        this.backIndex++;
        return `${item} Added`;
    }
   dequeue(){
    const item =this.items[this.frontIndex];
    this.frontIndex++;
    return `${item} Removed`;
   }
   peek(){
    return this.items[this.frontIndex];
   }
   isEmpty(){
    return this.backIndex===this.frontIndex;
  }
   printQueue(){
    return this.items;
   }
}
const queue=new Queue();
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.printQueue());
console.log(queue.isEmpty())