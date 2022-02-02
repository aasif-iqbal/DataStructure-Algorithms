
//const fish = ['nemo'];

//const fishes = ['joy','gilli','himmpy','shark','whale','jellyfish','nemo','bill'];

// const large = new Array(100).fill('nemo');

function findingNemo(fish){
    let t0 = performance.now();
    for(let i=0; i<fish.length; i++){
        if(fish[i] === 'nemo'){
        console.log('Found nemo!');
        }
    }

    let t1 = performance.now();
    console.log('call to find nemo took:' + (t1-t0) + '-miliseconds.');
}
//findingNemo(large); //O(n)-->O(100)-->linear time. where n=number of elem in array.
//findingNemo(fish); //O(n)-->O(1)
//findingNemo(fishes); //O(n)-->O(8);

function compressFirstBox(boxes){
    console.log(boxes[0]);  //O(1)
    console.log(boxes[1]);  //O(1)--> Constant time
}
//const boxes = [2,3,4,5,6,7,8];
//compressFirstBox(boxes);

console.log("#1.Worst case");


const fishes = ['joy','gilli','himmpy','nemo','shark','whale','jellyfish','bill'];

function findingNemo(fishes){
   
    for(let i=0; i<fishes.length; i++){
        console.log("Finding..."+fishes[i]);
        if(fishes[i] === 'nemo'){
        console.log('Found nemo!');
        break;
        }
    }       
}

// findingNemo(fishes); 

console.log('#2.Remove Constant');



function compressBoxTwice(boxes){
    
    boxes.forEach(function (boxes) {
        console.log(boxes);
    });                     //O(n)

    boxes.forEach(function (boxes) {
        console.log(boxes);
    });                     //O(n)
}
// O(2n) --> O(n) //Remove Constant 

console.log('#3.Different terms for input');


function compressBoxTwice(boxes, boxes2){ 
//        two diff inputs, boxes may contain 10 box,and boxes2 may conatain only one box in it.
    
    boxes.forEach(function (boxes) {
        console.log(boxes);
    });                     //O(n) or O(a)

    boxes2.forEach(function (boxes) {
        console.log(boxes);
    });                     //O(m) or O(b)
}
// O(n+m) or O(a+b)

const boxes = [1,2,3,4,5];
const items = ['a','b','c','d','e'];

function logAllPair(){
    for(let i=0; i<boxes.length; i++){
        for(let j=0; j<items.length; j++){
            console.log(boxes[i]+"->"+items[j]);
        }
    }
}
logAllPair();   // O(n^2)-->Quadratic time
console.log('#4.Drop Non-Dominants');


function printAllNumbersThenAllPairSum(numbers){

    numbers.forEach(function(number){
        console.log(number);
        })

    console.log('and there are their sums:');

    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber);
        })
    })
}

   // printAllNumbersThenAllPairSum([2,4,6,8,10]); // O(n + n^2)--> O(n^2)
