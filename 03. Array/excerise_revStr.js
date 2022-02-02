let str = 'Hi my name is John'   //->`nhoJ si eman ym iH`

function revStr(str){
    let len = str.length;
    
    split_value = str.split('');
    
    for(let i=0; i<len/2; i++){
        let temp = split_value[i];
        split_value[i] = split_value[len-i-1];
        split_value[len-i-1] = temp;
    }

    return split_value;
}
// let value = revStr(str);
//console.log(value);

function reverse(){
    //check invalid condition.
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Invalid input';
    }
    const backward = [];
    const totalItem = str.length-1;

    for(let i=totalItem; i >= 0; i--){
        backward.push(str[i]);
    }
    return backward.join('');
}
let value = reverse1(str);
console.log(value);

function reverse1(str){
    return str.split('').reverse().join('');
}

const reverse2 = str => [...str].reverse().join('');
const value2 = console.log(reverse2(str));
