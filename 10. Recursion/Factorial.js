
function factorialUsingRecursion(value){
  
  //base case 
  if(value === 0)
  {
    return 1;
  }
  return factorialUsingRecursion(value - 1) * value;
}

function factorialUsingIteration(value){
  if(value > 0){
      value *= value-1;
      value --;
  }
  return value;
}
const val = factorialUsingIteration(5);
const val2 = factorialUsingRecursion(5);

console.log(val);
//console.log(val2);
