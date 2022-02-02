
//in javascript, Array are object with integer index.
class myArray{
    
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index]
    }

    push(item){
         this.data[this.length] = item;
         this.length++;
         return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return lastItem;
    }

    shiftItems(index){
        for(let i=index; i<this.length-1; i++){
            this.data[i] = this.data[i+1]; 
        }
        delete this.data[this.length-1];
        length--;
    }
}

const newArray = new myArray();
newArray.push('hi');
newArray.push('how r u');
newArray.push('!');
newArray.push('i m fine.');

newArray.delete(1);
console.log(newArray);
