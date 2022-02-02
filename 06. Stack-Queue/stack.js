class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(data){
        const newNode = new Node(data);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        console.log(this);
        return this;
    }

    pop(){
        delete this.top;
        this.length--;
        console.log(this);
    }

    isEmpty(){
        if(this.length===0){
            return true;
        }
        return false;
    }

}

const myStack = new Stack();
myStack.push(2);
myStack.push(3);    
myStack.pop();
myStack.pop();
myStack.pop();
console.log(typeof(myStack.isEmpty()));
//console.log(myStack.push(2));