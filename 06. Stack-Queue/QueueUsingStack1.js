class Queue{ 
    
    constructor(){
        this.s1 = [];
        this.s2 = [];
        //console.log(this.s1);
    }

    peek(){
        console.log('peek',this);
        return this.s1[this.s1.length - 1];
    }

    enqueue(data){
       while(!this.s1){
        console.log('peek1',this.s1.peek()); 
            this.s2.push(this.s1.peek());
            this.s1.pop();
       }

       this.s1.push(data);

       while(!this.s2){
           this.s1.push(this.s2.peek());
           this.s2.pop();
       }              
    }

    dequeue(){

        // if first stack is empty 
        if (!this.s1) { 
            console.log('queue is empty'); 
            return null;
        } 

        // Return the top of stack1 
       console.log(this.peek());
    }

}

const myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(5);
myQueue.enqueue(8);
myQueue.enqueue(9);
myQueue.peek();
myQueue.dequeue();
myQueue.enqueue(44);