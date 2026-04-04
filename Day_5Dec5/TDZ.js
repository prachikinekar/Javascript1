// 5. Temporal Dead Zone (TDZ)--->The Temporal Dead Zone (TDZ) in JavaScript is the period of time between entering a variable's scope and the moment that variable is declared and initialized with a value. 



console.log(a);//undefined
var a=10;
console.log(a);//10

// var declared its variable globally

// console.log(aa);//Cannot access 'aa' before initialization
let aa=10;
console.log(aa);//10


// console.log(aaa);//Cannot access 'aaa' before initialization
const aaa=1000;
console.log(aaa);//1000


// script --> memory creation phase (Heap)


/* {

    {



    }

} */

// 6.