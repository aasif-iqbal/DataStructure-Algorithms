
//case 1:
function inception(){
//debugger;
inception();
}
// inception();  //stack overflow() bcoz base-case is not defined.
     //Uncaught RangeError: Maximum call stack size exceeded

//case 2:             
let counter = 0;
function inception1(){
console.log(counter);
debugger;
if(counter > 3){
return 'done!';
}
counter++;
return inception1();
}
const val = inception1();
console.log(val);
