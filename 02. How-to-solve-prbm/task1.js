
let ar1 = ['a','b','c','x'];
let ar2 = ['z','x','y'];

function containsCommenItem(ar1, ar2){

    for(let i=0; i<ar1.length; i++){
        for(let j=0; j<ar2.length; j++){
            if(ar1[i] === ar2[j]){
                console.log("Found at:"+ j +"pos");
                return true;
            }
        }
    }
    return false;
}
//containsCommenItem(ar1, ar2); //time complexity-O(n^2)[bad], space compx-O(1)[good]

function containsCommenItem2(ar1, ar2){
    //step1:loop through first array and create object where properties === items in an array.

    let map = {}  //create obj
    for(let i=0; i<ar1.length; i++){
        if(!map[ar1[i]]){
            const item = ar1[i];
            map[item] = true;
        }
    }
    //console.log(map);
    //step2:loop through second array and check if item in second array exists on created object.
    for(let j=0; j<ar2.length; j++){
        if(map[ar2[j]]){
            return true;
        }
    }
    return false;
}

let checkStatus = containsCommenItem2(ar1, ar2);  //time complexity-O(a+b)[good], space compx-O(a)[bad]
//console.log(checkStatus);
//containsCommenItem2(ar1, ar2);

//using javascript built-in methods

function containsCommenItem3(ar1,ar2){
    return ar1.some(item => ar2.includes(item))
}
let checkStatus1 = containsCommenItem3(ar1,ar2);
console.log(checkStatus1);
containsCommenItem3(ar1, ar2);
