//bubble sort- time complexity- O(n^2)

const numbers = [2,9,4,1,8,6,3,7];

function bubbleSort(array){
    let length = array.length;

    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            //swap
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    //array.sort();
    return array;
}

var result = bubbleSort(numbers);
console.log(result);