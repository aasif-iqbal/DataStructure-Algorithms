class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    //_hash is private property `_`(underscore)indicate that, it is private.

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            console.log(hash);
        }
        return hash;
    } //O(1)

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            //   console.log(this.data[address]);
        }
        this.data[address].push([key, value]);
        return this.data;
    } //O(1)

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        //console.log(currentBucket);

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                //[[grapes][1000], [apple][12]]
                //ie.[[0-index][i], [0-index][i+1]]
                if (currentBucket[0][i] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    } //O(1)

    //keys allows us to iterate(loop through) whole hash table.

    keys() {
        const keysArray = [];
        let value = 0;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                //console.log(this.data[i]);
                keysArray.push(this.data[i][0][0]);

                //if you are doing in real time,you will not allow to use push method.
                // keysArray[value] = this.data[i][0][0];
                //value++;
            }
        }
        console.log(keysArray);
        return keysArray[value];
    }

}

const myHashTable = new HashTable(50);
//let value = myHashTable._hash('grapes');
myHashTable.set('grapes', 1000);
myHashTable.set('apple', 12);
myHashTable.set('mango', 222);
myHashTable.set('banana', 120);
myHashTable.set('kiwi', 001);

// myHashTable.get('apple');
//console.log(myHashTable.get('grapes'));

myHashTable.keys();