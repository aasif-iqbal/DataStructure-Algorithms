const array1 = [0, 2, 3, 31];
const array2 = [1, 4, 6];

function mergeSortArray(array1, array2) {

    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //check Input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {

        console.log(array1Item, array2Item);
        //if (!array2Item|| array1Item < array2Item) {
        if (array2Item == undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    } return mergedArray;
}
let val = mergeSortArray(array1, array2);
console.log("Result:", val);

/* function mergeSort(ar1, ar2){ // if(!ar1 && !ar2 || ar1.length===0 && ar2.length !=0
|| typeof ar1 !=='number' && typeof ar2 !=='number' ){ // return 'invalid input' ; // } for(let i=0; i < ar1.length;
i++){ if(ar1[i]> ar1[i+1]){
let temp = ar1[i];
ar1 = ar1[i+1];
ar1[i+1] = temp;
}
}

for(let j=0; j < ar2.length; j++){ if(ar2[j]> ar2[j+1]){
let temp = ar2[j];
ar2 = ar2[j+1];
ar2[j+1] = temp;
}
}

//return ar1;
}
// const val = mergeSort(ar1,ar2);
//console.log(val);
*/