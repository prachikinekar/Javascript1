/* 
# Lexical Scope: 
   -The scope of a variable is determined by its location within the source code and nested functions have access to variables declared in their outer scope.

# Closure: 
   -A closure is an inner function that has access to its outer function's variables even after the outer function's execution is Completed/Closed.
   -A function that retains access to its lexical scope even when it is executed outside of that lexical scope. e.g. counter
*/

// // Parent/outer funtion
// function funOuter(){
//    console.log("I am funone");

//    let a=1;
// // // Child/Inner funtion
//    function funInner(){
//      console.log(a);//1
//      console.log("I am funTwo");//I am funTwo
//    }
//    funInner()
// };
// funOuter();

//Parent/outer funtion
function funOuter(){
    console.log("I am funone");
    let a=1;
// // Child/Inner funtion
function funInner(){
    console.log(a);//1
    // can access a bcoz of lexical scope
    console.log("I am funTwo");

}
return funInner;

}
let returned=funOuter();
console.log(returned)
// call function:functionName()

// // Inner function calling
// returned();


