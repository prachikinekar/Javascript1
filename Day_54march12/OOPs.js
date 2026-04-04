/*
Polymorphsim: It is combination of both overloading and overriding

Poly:multipal
morphism:Trasformation

1.Overloading:
same class,same method name(same declaration),different signature(different defination).

2.Overriding:
different  class,same method name(different declaration),same signature(same defination).
        Existing functionality override

// signature:Types of argument ,no of argument ,order of arguments.
 */

function fun(a,b,c,d){
    console.log(a,b,c,d)
}


// let fun=function(){}

// let fun=()=>{}

// fun(true);//true undefined undefined undefined
// Script scope:
// globally define-->window
// window.fun(true);//true undefined undefined undefined
// class-->window
// method/function--->fun()
// signature--->arguments-->true

// function/method overloading:
// window.fun(true,1);
// window.fun(true,1,"hii");
// window.fun(true,1);
// window.fun(true,1,8,9);


// Real Examples:
// let arr=[1,2,3,4,5];
// console.log(arr.slice());[1,2,3,4,5]
// console.log(arr.slice(0));[1,2,3,4,5]
// console.log(arr.slice(0,3));[1,2,3]

/*
2.overriding:
different class,same method name(different declaration),same signature(same defination).

 */

function fun2(){
    console.log("I am fun2");
}

// fun2();//I am fun2
window.fun2();//I am fun2

let obj={
    a:10,
    fun2(){
        console.log("I am fun2");
    }
}
obj.fun2();//I am fun2

// Interview:
// OOPS ?
// default examples
// real implementation
// present code --> OOPS concept

// OOPs (Object-Oriented Programming) is a programming concept where we organize code using objects and classes.
// It helps make programs easy to understand, reusable, and secure.

// Simple Definition

// OOPs is a programming style where programs are built using objects that contain data and functions.

// Main 4 Concepts of OOPs

// 1️⃣ Encapsulation

// Wrapping data (variables) and methods (functions) together in a single unit called a class.

// It also hides data from direct access using private variables.

// Example idea:
// Like a capsule medicine – everything is packed inside.

// 2️⃣ Abstraction

// Showing only important information and hiding complex details.

// Example:
// When you use a mobile phone, you just press buttons.
// You don’t know the internal logic of how it works.

// 3️⃣ Inheritance

// One class can use properties of another class.

// Example:
// Animal → parent class
// Dog → child class

// Dog can use properties of Animal.

// 4️⃣ Polymorphism

// Same function name but different behavior.

// Example:
// add() function

// add two numbers

// add three numbers

// Same name but different work.