class Stack{
constructor(){
this.items=[]
}
push(elements){
    this.items.push(elements)
}
pop(){
    if(this.items.length===0){
        return "Underflow"
    }
    return this.items.pop();
}
peek(){
  return this.items[this.items.length-1]
}
isEmpty(){
 return this.items.length===0;
}
printStack(){
return this.items
}
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.printStack());
