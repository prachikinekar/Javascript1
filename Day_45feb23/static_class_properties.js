// static properties and methods are those that belong to the class itself rather than to instances of the class.They can be accessed without  creating instance of the class.
class classOne{
    key1=10;
     static key2="Js";
     static key3(){
        console.log("I am static method");
    };
};

// Retrieving static properties and methods:
console.log(classOne.key1);//undefined
console.log(classOne.key2);//Js
classOne.key3();//I am static method
