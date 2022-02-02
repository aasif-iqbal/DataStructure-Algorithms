//selection sort- time complexity- O(n^2) #space complexity-O(1)

const numbers = [2,9,4,1,8,6,0,3,1,19,7];


function selectionSort(arr){
    const length = arr.length;

    for(var wall=0; wall < length-1; wall++){
    //1.find smallest number
    //wall - index, points first number behind "wall".
    var indexOfSmallest = wall;
    for(var j = wall; j< length; j++){
        if(arr[indexOfSmallest] > arr[j]){
            indexOfSmallest = j;
        }
    }   
    //smallest element is on indexOfSmallest.
 
    //2.swap
    let temp = arr[wall];
    arr[wall] = arr[indexOfSmallest];
    arr[indexOfSmallest] = temp;  
    }
    return arr;
}

function selectionSort2(inputArr){
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
        // if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
       // }
    }
    return inputArr;
}
//const result = selectionSort(numbers);
const result = selectionSort2(numbers);
console.log(result);

function countLen(arr){
    let count = 0;
    while(arr[count] != undefined){
        count++;
    }
    return count;
}

const len = countLen(numbers); 
console.log('len:'+len);
//console.log(`len:${len}`);