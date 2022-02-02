// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }   

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    //Adding nodes at the end of list.
    append(value) {
        //Node class
        //const newNode = new Node(value);

        const newNode = {
            value: value,
            next: null
        };

        this.tail.next = newNode;  //tail.next[null-> newNode]
        this.tail = newNode;        //tail.[value->newNode, next->null]
        this.length++;
        return this;
    }

    //Adding to the beginning to the list.
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        //check params
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };

        let leader = this.traverseToIndex(index - 1);
        let holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        //check params
        //if(index >= this.length){return }

        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        //check params
        //if(index >= this.length){}

        let leader = this.traverseToIndex(index - 1);
        //console.log('leader:',leader);
        let unwantedNode = leader.next;   // unwanted ->the value will be delete.
        //console.log('unwantedNode',unwantedNode);
        leader.next = unwantedNode.next;
        //console.log('leader->next',leader.next);
        this.length--;
        return this.printList();
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        //return this;
    }

    printList(value) {
        const newArray = [];
        let currentNode = this.head;
        while (currentNode != null) {
            newArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return newArray;
    }
}

const LinkedListObj = new LinkedList(17);

LinkedListObj.append(5);
LinkedListObj.append(16);
LinkedListObj.prepend(3);
LinkedListObj.append(8);
LinkedListObj.printList();
LinkedListObj.remove(1);
//let val = LinkedListObj.insert(2,99);
LinkedListObj.reverse();
console.log(LinkedListObj.printList());

