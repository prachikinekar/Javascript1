// this

/*

Q.What is 'this'?
-js reserved keyword or variable

-'this' always containing dynamic value which is object
-'this' is a object(Dynamic object)
-which object?
-containing dyanamic value/object according to its scope

1. In script & functions : this ==> window 
2. In method : this ==> owner object
Depends on function type and its nested structure
3. In constructor:this ==> new instance.
*/

// let obj=10;
// let this=10;//function,class ,for ,if ,new


// what is this?
// this is a variable  which stores value


// which value stored?
// Dynamic value stored -->value datatype--->object
// this ====object
// this.key
// this.key=value-->can add values in this object

// Script scope:this have window object value
console.log(this);//{}


// Example for value retrieve and update in function

let objj={
    key:10
}

console.log(objj.key);//10

objj.key2=100;

console.log(objj);//{ key: 10, key2: 100 }

// in class constructor scope:this have new instance value
class classThree{
    constructor(para){
        console.log(para);//classThree {}
        // this.key=para;////classThree { key: 'Hi  i am  argu' }
    }
}

let obj6=new classThree("Hi  i am  argu");
console.log(obj6);//classThree { key: 'Hi  i am  argu' }



