/*
Lexical Scope,Closure
*/


//Parent/outer function
function funOne(){
    console.log("I am funOne");
    let a=1
    // child/Inner function
    function funTwo(){
    console.log(a);
    console.log("I am funTwo");
    }
    funTwo()
} 

funOne()