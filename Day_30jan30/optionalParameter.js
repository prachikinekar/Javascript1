let obj={
    name:"prachi",
    age:21
}

// console.log(obj.age);//21
// console.log(obj.lastname);//undefined
// console.log(obj.lastname?.age);//undefined


// nullish(??)--->null,undefined

console.log("Hi"??"Js");//"Hi"
console.log(null??"Js")//"JS"
console.log(undefined??"JS")//"JS"


let a=null??"JS";
a="Hi"??"JS";
console.log(a);//Hi

