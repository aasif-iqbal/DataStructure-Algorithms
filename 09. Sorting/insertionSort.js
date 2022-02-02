//insertion sort- time complexity- O(n)[best] O(n^2)[avg,worst] #space complexity-O(1)

const numbers = [2,9,4,1,8,6,0,3,1,19,7];

function insertionSort(arr){ //arr->parameter

    const length = arr.length;
    for(let i = 1; i < length; i++){        
        let value = arr[i];
        let spaceIndex = i;
        while(spaceIndex > 0 && arr[spaceIndex - 1] > value){
            arr[spaceIndex] = arr[spaceIndex - 1];
            spaceIndex--;            
        }
        arr[spaceIndex] = value;
        }
    return arr;
}

const result = insertionSort(numbers); //numbers->argument
console.log(result);

