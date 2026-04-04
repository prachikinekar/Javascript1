// spread_rest with destructuring:
// ...

let arr2=[1,2,3];
let [a,b,c]=arr2;
// sperate(spread)   = object

// RHS=spread
console.log(a);//1
console.log(b);//2
console.log(c);//3

[...arr2]=arr2;

// // LHS-->rest 
console.log(arr2);//[ 1, 2, 3 ]

// Partial rest:
[p,q,...arr2]=arr2;
console.log(p);//1
console.log(q);//2
console.log(arr2);//[ 3 ]

let arr3=[1,2,3];
// push

let arr4=["Js","Ts",...arr3];
console.log(arr4);//[ 'Js', 'Ts', 1, 2, 3 ]


let [k,m,...l]=arr4;
console.log(k);//Js
console.log(m);//Ts
console.log(l);//[ 1, 2, 3 ]

// spread creating shallow copy









