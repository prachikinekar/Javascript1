/*
Q. what is 'this'?
   - js reserved keyword or variable
   - 'this' always containing dynamic value which is object
   - 'this' is a object (Dynamic object)
   - which object ?
    - containing dynamic value/object according to its scope:
      1. In script & functions : this ==> window 
      2. In method  : this ==> owner object
          Depends on function type and its nested structure
      3. In constructor : this ==> new instance.

# this scope depends on function type and its nested structure :
  # Type of function:
   1. Normal function : (function declaration & expression)
    - 'this' value is dynamic
    - Depends on how/where the function is called

   2. Arrow function :
    - 'this' value is static
    - Depends on the where the function is declared/written
    - Enclosing lexical context/scope        

*/

// window 
//     script scope

// function:
// function funOne(){
//     console.log("funone",this);
// }

// funOne();

// let funOne2=function(){
//     console.log("funOne2",this);
// }

// funOne2();

// let funOne3=()=>{
//     console.log("funone3",this);
// }
// funOne3();

// method:

let obj={
    key:"I am obj",
    key2:function(){
        console.log("Key2",this);
    },
    key3:()=>{
        console.log("Key3",this);
    },
    key4:function(){
        console.log("Key4",this);//object
        let innerFun=()=>{
            console.log("Key5",this);//object
        };
        innerFun();
    }
};

obj.key2();//object
obj.key3();//window
obj.key4();//object
