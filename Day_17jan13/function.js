/*
#Function:Block of code designed to get particular output,
        -Functions are the first class citizen of js
        -function are heart of js

        #use/need of functions:
        1. avoid repetative code (reuseibility)
        2. split of code. 


        #types of functions
        1.Function Declaration(named function)
        2.function expression(anonymous function)
        3.Arrow function(Es6 feature)


        1.function Declaration(named function)

        Syntax:

        function functionName(){}

        function functionName(para1,para2,...)--->function declaration
        { start of code

        block of code---->function defn

        }-->function block


// function calling:
    functionName()
    functionName(argu1,argu2)


    // function 3 parts:
    1.Function Declaration
    2.Function definition
    3.Function calling

    Q.What is the function parameters?
    Parameters are block of code variables

    Q.What is function arguments?
    Values for the parameters initialization

 */

// function declaration:without parameters:

// function funOne(){
//     console.log(10+10);
//     // with same number operaton
// }
// funOne();
// funOne();

/*
Parameters:variables for BOC
*/

//Addition operation with different numbers:
// 10, 20
// 20, 23
// 25, 12

// function funOne(){
//     console.log(10+20);
// }
// funOne();

// function funOne(){
//     console.log(20+23);
// }
// funOne();

// Function declaration with parameters:
function funOne(a,b){
    console.log(a+b)
}

// arguments:
funOne(2,3);
funOne(10,30);


// code write
// code execute-->EC

// 2 Phases:1.Memory creation  2.Code execution