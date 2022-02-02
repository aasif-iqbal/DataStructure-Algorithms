class Doubly_LinkedList{
    constructor(value){
        this.head = {
            value:value,
            next:null,
            prev:null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value:value,
            next: null,
            prev:null
        };

        newNode.prev = this.tail;
        this.tail.next = newNode;  
        this.tail = newNode;       
        this.length++;
        return this;
    }

    //Adding to the beginning to the list.
    prepend(value){
        const newNode = {
            value: value,
            next: null,
            prev:null
        };

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value:value,
            next:null,
            prev:null
        };
       // console.log('new node value:',newNode); //newNode contain inserted value. 

        let leader = this.traverseToIndex(index-1);
        let follower = leader.next;      //console.log('follower:',follower)
        leader.next = newNode;           //console.log('leader.next:',leader.next);
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;         //console.log('follower.prev:',follower.prev);
        this.length++;
        //console.log(this);
        return this.printList();
    }

    traverseToIndex(index){
        //check params
        //if(index >= this.length){return false}

        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        //if(index >= this.length){return false}
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        unwantedNode.prev = leader.next;
        console.log(this);
        return this.printList();
    }

    
    reverse(){
        const newArray = this.printList();
        console.log('new:',newArray);
        
        const len = newArray.length;
        for(let i=0; i < len/2; i++){
            const temp = newArray[i];
            newArray[i] = newArray[len-i-1];
            newArray[len-i-1] = temp;
        }
        console.log(newArray);
        return newArray;
    }

    printList(value){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
       // console.log(array);
        return array;
    }
}

const Doubly_LinkedListObj = new Doubly_LinkedList(5); //head.value=5
Doubly_LinkedListObj.append(3);
Doubly_LinkedListObj.prepend(7);
Doubly_LinkedListObj.insert(2,88);
//Doubly_LinkedListObj.printList();
// Doubly_LinkedListObj.remove(1);
Doubly_LinkedListObj.reverse();       