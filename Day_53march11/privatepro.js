//Private property:
class classOne{
    // static property
    static a=20

    // Private property:#
    #b="Ts"
}

console.log(classOne.a);//20
// static :using this we can access var using class

// static means the variable belongs to the class, not the object (instance).
let obj1=new classOne();
// console.log(obj1.a);//undefined
// console.log(obj1.#b);//SyntaxError: Private field '#b' must be declared in an enclosing class  

// class classTwo extends classOne{
//     c=this.#b//Property '#b' is not accessible outside class 'classOne' because it has a private identifier.ts(18013)
// }
