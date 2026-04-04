/*
OOps:
2.Encapsulation:Hide Imp data
#get,set

3.Abstraction:Hide method logic
 */

// class bankAccount{
//     // data base
//     // Encapsulation
//     #pin
//     constructor(para1,para2){
//         this.name=para1
//         this.#pin=para2
//     }

//     // Abstraction
//     transitions(pin,amount){
//         if(pin===this.#pin){
//             console.log("Pin correct,can withdraw",amount);
//         }else{
//               console.log("Pin  incorrect");
//         }
//     }

// }

// let acc=new bankAccount("prachi",1234);
// console.log(acc);//bankAccount { name: 'prachi' }
// // pin not visible and not retrieve
// // console.log(acc.#pin);//SyntaxError: Private field '#pin' must be declared in an enclosing class
// // console.log(acc.name);

// // Abstraction:
// acc.transitions(2000,200);//Pin  incorrect
// acc.transitions(1234,30);//Pin correct,can withdraw 30

