// static class structure:

class classOne{
    key="Ts";
    methodOne=function(){
        console.log("I am method");
    }
}

let obj=new classOne();
console.log(obj);//classOne { key: 'Ts', methodOne: [Function: methodOne] }
let obj2=new classOne();
console.log(obj2);//classOne { key: 'Ts', methodOne: [Function: methodOne] }
let obj3=new classOne();
console.log(obj3);//classOne { key: 'Ts', methodOne: [Function: methodOne] }
obj3.methodOne();//I am method

// correlate with function with parameter:
// function(para)

// To class can send parameters with the help of constructor
// constructor also called as constructor function

class classTwo{
    constructor(para){
        console.log(para);
    }
}

let obj4=new classTwo("Hi i am argu4");//----->arguments receiving to the classTwo constructor as a parameter(receiving to the classTwo)
// Hi i am argu4
let obj5=new classTwo("Hi i am argu5");//Hi i am argu5


// Define class properties with constructor
class classThree{
    // let, const, var cant use for property define in the class
    key//-->need to define
constructor(para){
    console/log(para);// Hi I am Argu
    key=para;//  ReferenceError: key is not defined
     // key new/ no referance

}
}

let obj6=new classThree("Hii i am argu");
console.log(obj6);

