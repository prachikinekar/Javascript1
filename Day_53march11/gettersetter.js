class classThree{
    // Private property
    #mobNo

    constructor(para1,para2){
        this.name=para1;
        this.#mobNo=para2;
    }

    //getter method:Retrieve data
//  pName(){
//   console.log("My name is",this.name) ; 
// }

get pName(){
  console.log("My name is",this.name) ; 
}

// setter method: update data
    // uName(para3) {
    //     this.name = para3;
    // }

 
 set uName(para3){
     this.name=para3;
 }
}
let obj=new classThree("prachi",22345);
console.log(obj);

obj.pName;//My name is prachi

obj.uName="Ts";
obj.pName;//My name is Ts

