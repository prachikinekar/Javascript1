/*
  #Lexical scope:
  The scope of a variable is determined by its location within  the source code and nested functions have access to variables declared in their outer scope.
 
  #Closure:
   -A closure is an inner function that has access to its outer function's variables even after the outer function's execution is Completed/Closed.
   -A function that retains access to its lexical scope even when it is executed outside of that lexical scope. e.g. counter
*/

//Parent/Outer function
function funOuter(){
    console.log("I am funOuter");
    let a=1;

    //Child/Inner function
    function funInner(){
        console.log(a)//1
        // can access a bcoz of lexical scope
         console.log("I am funInner");
    }
    funInner();
}
// funOuter();

let returned=funOuter();
console.log(returned);

//I am funOuter
// 1
// I am funInner
// undefined

// call function: functionName()

// Inner function calling
// returned();//TypeError: returned is not a function
