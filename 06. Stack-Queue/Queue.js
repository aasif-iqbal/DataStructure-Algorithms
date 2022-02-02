class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;  
    }

    //insert node at end or last.
    enqueue(data){
        const newNode = new Node(data);
        
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        console.log(this);
        return this;
    }

    //remove node from first
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            return this.last = null;
        }
        //if you want to hold previous value,hold it on holdingPointer(may be use as waiting list in queue of movie tickets)
        this.holdingPointer = this.first;
        
        this.first = this.first.next;
        this.length--;
        console.log('deq',this);
        return this;
    }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue('jack');
myQueue.enqueue('miller');
myQueue.enqueue('joe');
myQueue.dequeue();
myQueue.dequeue();