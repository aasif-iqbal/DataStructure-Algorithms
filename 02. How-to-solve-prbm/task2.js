//check sum=8 if yes return true if no return false.
//const arr = [1,2,3,9];  //return false.
//const arr = [1,2,4,5,3];  //return true
// let sum = 8;

function checkSum(arr, sum){
    //loop through arr
    for(let i=0; i<arr.length; i++){
        
        if(sum === arr[i] + arr[i+1]){
            return true;
        }
    }
    return false;
}
//const result = checkSum(arr, sum);
//console.log(result);
//checkSum(arr,sum);

//native solution.


//better solution.
function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;

    for(let i=0; i < len; i++){
        if(mySet.has(arr[i])){
            return true;
        }
        mySet.add(sum - arr[i]);    
    }
    return false;
}

const arr = [6,4,3,2,1,7]

console.log(hasPairWithSum2(arr, 9));

//The 'Set' object lets you store unique values of any type, whether primitive values(ie number,string,bool,bigint,undefined and symbol) or object references.

//const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
//console.log([...new Set(numbers)]) 
// [2, 3, 4, 5, 6, 7, 32]

//Set.prototype.has(value)
//Returns a boolean asserting whether an element is present with the given value// in the Set object or not.