
        let arr = ['a', 'b', 'c', 'd'];
        //4*4 = 16 bytes of storage.

        //push
        arr.push('e'); //insert element at last index.
        //console.log(arr);  //Time-compx-O(1)

        arr.pop();  //delete element form last index.
        // console.log(arr);  //O(1)

        arr.unshift('x');  //insert element at beginning of arr.
        //console.log(arr);  //O(n)

        arr.splice(4, 0, 'alien'); //splice(indexat, numofdeleteindex, 'insertstring')
        console.log(arr);  //O(n)
