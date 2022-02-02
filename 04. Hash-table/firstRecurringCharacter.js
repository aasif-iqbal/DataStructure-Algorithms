//Find first recurring value in given array
let ar = [2,5,1,2,3,5,1,2,4]; // return 2
let ar1 = [2,1,1,2,3,5,1,2,4] //return 1
let ar2 = [2,3,4,5]           //return undefined.


function firstRecurringCharacter2(input){

   for(let i=0; i<input.length; i++){
       for(let j=i+1; j<input.length; j++){
           if(input[i] === input[j]){
               return input[i];
           }
       }
       return undefined;
   }
}
let val = firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);  //Time complexity:0(n^2)
console.log(val);

function firstRecurringCharacter(input){
   let map = {};

   for(let i=0; i<input.length; i++){
       
       if(map[input[i]] !== undefined){
           console.log(map[input[i]]);
           return input[i];
       }else{
           map[input[i]] = i;
           console.log(map[input[i]] = i);
       }
       console.log(map);
   }
   
   return undefined;
}

//let val = firstRecurringCharacter([2,5,2,1,3,5,1,2,4]);
//console.log(val);
