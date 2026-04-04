// var a=10;
// console.log("Line:1",a);//10
// function fu(){
//     console.log("Line:2",a);//undefined
//     var a=28;
//     a++;
//     console.log("Line:3",a);//29
//     if(a){
//         var a=3;
//         a++;
//         console.log("Line:4",a);//4

//     }
//     console.log("Line:5",a);//4
//     //as var is function scope and it is modified not new var is created
// }
//     console.log("Line:6",a);//10
// fu();


/*
 1.Math.pow(x,y)
 Action:Calculating the result of x power y
 Return:number
 */

// //Math operations:number
// console.log(Math.pow(2,2))//4
// //2**2

// /*
// 2.Math.abs(-x)
// Action:Will remove negativity and print results
// return:number
// */

// console.log(Math.abs(-8));//8
// //+ve

// /*
// 3.Math.random()
// Action:will generate random value from 0.0-1.0
// return:number 
//  */
// console.log(Math.random());
// // Math.random(); // 0.0 - 1.0

// // Q Generate 4 digit oyp
// console.log(Math.random()*10000);


/*
4.Math.round(num)-->(0.5>= round for max value and 0.5< round for min value)
    Action: will round figure the value of num
    Return: number  
 */
//1.7-->2
// 1.3--->1
// console.log(Math.round(1.7));
// console.log(Math.round(1.3));


// /*
// 5.Math.ceil(x)
// Action:calculating the largest near possible number in decimal number line
// return:number
//  */

// //1.7-->2
// //1.3-->2
// console.log(Math.ceil(1.3));
// console.log(Math.ceil(1.7));

/*
6.Math.floor(x):
Action:calculating the smallest near possible number in decimal number line
return:number
 */

//1.7-->1
console.log(Math.floor(5.5));//5
console.log(Math.floor(1.5));//1

//0.1-->1.0
// 0
// 1

// console.log(Math.floor.random()*1000);
// console.log(Math.round(Math.random()*10000));
// console.log(Math.random()*10000);

const otp=Math.floor(1000+Math.random()*9000);
console.log(otp);

/*
7.Math.max(x,y) & Math.min(x,y)
Action:Will generate max and min values from given value
Return:number

*/
console.log(Math.max(10,2,3,6,9,3));
console.log(Math.min(10,2,3,6,9,3,0));
