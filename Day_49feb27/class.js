/*

OOps:
1.Inheritance-->
1.prototype
2.class--->extends

 */

class classOne{
    // class level property
    key1=10;
}

// let obj1=new classOne();
// console.log(obj1.key1);//10

// // Instance level property
// obj1.key3="hello";

// console.log(obj1.key3);//hello
// console.log(obj1);//classOne {key1: 10, key3: 'hello'}


let obj4={
    // Instance level property
     name1:"hello"

}

console.log(obj4.name1);//hello

// class level method
console.log(obj4.hasOwnProperty("name1"));//true


// Array :
/*
CLass level method
push(),pop()

[]
"String".trim()

Why? how?
 */

// class classTwo extends classOne{
//     key2="JS";

// }

// let obj2=new classTwo();
// console.log(obj2);// classTwo { key2: 'JS' }
// // after extend:
// //classTwo {key1: 10, key2: 'JS'}

class classThree extends classOne{
    key4="hello";
}
let ibj5=new classThree()
console.log(ibj5);