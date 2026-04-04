//class inheritance

// class classOne{
//     a=10;
// }
// //instance

// class classTwo extends classOne{
//     b=10;
// }
// //instance

// class nheritance with class constructor
// super()-->calling super constructor

class classOne{
    // super/father constructor
    constructor(para1,para2){
        this.name=para1
         this.lastname=para2

    }
}

// this is variable that hold object as a value
let obj=new classOne("kk","kkk1");
console.log(obj.name);
console.log(obj.lastname);


class classTwo extends classOne{
    constructor(para1,para2,para3,para4){
super(para1,para2)
this.name2=para3
this.lastname2=para4
    }
}

let obj1=new classTwo("hi","helllo","kk","kkko");
console.log(obj1);
// console.log(obj1.name);
// console.log(obj1.name2);
// console.log(obj1.lastname);
// console.log(obj1.lastname2);
