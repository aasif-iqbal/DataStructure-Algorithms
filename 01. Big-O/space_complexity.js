function foo(n){
    for(let i=0; i<n.length; i++){
        console.log('foo');
    }
}
//foo([1,3,4,5,6]);  //O(1)

function sayHiNTimes(num){
    let arry = [];
    for(let i=0; i<num; i++){
        arry[i] = 'hi'; //adding memory 
        console.log(arry[i]);
    }
}
sayHiNTimes(6); //O(n)
