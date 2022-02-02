class Stack{
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length-1];
    }

    push(data){
        this.array.push(data);
        console.log(this);
        return this;
    }

    pop(){
        this.array.pop();
        return this;
    }
    
}

const stackInstance = new Stack();
stackInstance.push(1);
stackInstance.push(2);
stackInstance.push(3);
stackInstance.pop();

