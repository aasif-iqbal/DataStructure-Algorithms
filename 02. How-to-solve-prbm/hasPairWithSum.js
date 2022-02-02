// Naive
function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum)
                return true;
        }
    }

    return false;
}

// Better
function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
        console.log(mySet);
    }
    return false;
}

// let set1 = new Set("fooooood");
// console.log(set1);  //Set { 'f', 'o', 'd' }

const result = hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
console.log(result);

function removeDuplicate(arr) {
    let len = arr.length;
    let count = 0;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                delete arr[j];
            }

        }
    }
    return arr;
}

const res = removeDuplicate([2, 4, 2, 1, 3, 4]); console.log(res);


