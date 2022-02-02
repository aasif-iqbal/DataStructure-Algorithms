
const fish = ['gili','shark','whale','nemo','joy','jellyfish','bill'];

function findingNemo(fish){
for(let i = 0; i<fish.length; i++){
    if(fish[i] === 'nemo'){
        console.log('Found Nemo using for-loop');
        break;
        }
    }
}

findingNemo(fish);

//arrow function in ES6
const findNemo2 = array => {
    array.forEach(fish => {
        if(fish === 'nemo'){
            console.log('Found Nemo using forEach');
        }
    })
}


//fish.forEach(ele => console.log("using foreach:" + ele));

const findNemo3 = array => {

    for(let fish of array){
        if(fish === 'nemo'){
            console.log('Found nemo using for-of');
        }
    }
}

const findNemo4 = array =>{
    for(let key in fish){
        if(fish[key] === 'nemo'){
            console.log('Found nemp using for-in');
        }
    }
}

findNemo2(fish);
findNemo3(fish);
findNemo4(fish);

