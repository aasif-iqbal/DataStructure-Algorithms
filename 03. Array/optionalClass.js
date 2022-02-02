
//1.reference type->created by Programer.
//[] === [] //return false

//2.context vs scope

// function a(){
    //console.log(this.document.location);  //this->window 
//}

const object = {
    a: function(){
        console.log(this);
    }
}
//console.log(object);  
//the area outside of function is called rootscope.
//the area inside the function is called scope.

//3.Instantiation->when u make a copy of obj. and reuse the code.
class Player{
    //run first
    constructor(name, type){
        console.log('Player_cls', this);
        this.name = name;
        this.type = type;
    }

    //method
    introduce(){
        console.log(`Hi i am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player{
     
    constructor(name, type){
        //console.log('Wizard_cls', this); //Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(name, type)
        console.log('Wizard_cls', this);   //`super`keyword is for making super-constructor calls and allows access to parent method.
    }

    play(){
        console.log(`weeee i m ${this.type}`); 
    }
}

const window1 = new Wizard('Shelly','Healer');
const window2 = new Wizard('Shawn','Dark magic');

window1.play();
