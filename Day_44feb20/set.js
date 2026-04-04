// /*

// map()----->advance object
// set()----->advance array

//  */

// // only stores unique values:
// let setObj=new Set([1,2,"Hi",1,2]);
// // []
// console.log(setObj);//Set(3) { 1, 2, 'Hi' }//Set(3)[1,2,'Hi']

// // size-->Length of set
// console.log(setObj.size);//3

// for(let value of setObj){
//     console.log(value);//1 2 Hi
// }

// // Methods:
// console.log(setObj.keys());//[Set Iterator] { 1, 2, 'Hi' }

// console.log(setObj.values());//[Set Iterator] { 1, 2, 'Hi' }

// console.log(setObj.entries());//[Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 'Hi', 'Hi' ] }


// CURD:
// add:
let setObj2=new Set();
// console.log(setObj2);//Set(0) {}

console.log(setObj2.add("Ts"));//Set(1) { 'Ts' }
console.log(setObj2);//Set(1) { 'Ts' }

console.log(setObj2.add("JS","Ts"));
console.log(setObj2);//Set(2) { 'Ts', 'JS' }


//  has(), delete(), clear(),

// has() return true or false
console.log(setObj2.has("JS"));//true
console.log(setObj2.has("Ts"));//true

console.log(setObj2.delete("JS"));//true
console.log(setObj2.delete("js"));//false

console.log(setObj2.clear());//undefined
console.log(setObj2);//Set(0) {}



/*
Deloitte QA Automation pune 5+ yrs exp:

let name = ["Ram", "Shyam", "Hari", "Ram", "Mira"];
let marks = [-5, 6, 3, -2, 0];
sort -> [6, 3, 0, -2, -5]; --> sort name array based on marks array   

 */

let name=["Ram","Shyam","Hari", "Mira"];
let marks=[-5,  6,      3,        -2,      0];
// sort -> [6, 3, 0, -5]; --> sort name array based on marks array   

let combined=name.map((n,i)=>({
    name:n,
    marks:marks[i]
}));
console.log(combined);
// [
//   { name: 'Ram', marks: -5 },
//   { name: 'Shyam', marks: 6 },
//   { name: 'Hari', marks: 3 },
//   { name: 'Mira', marks: -2 }
// ]

combined.sort((a,b)=>b.marks-a.marks);

let sortedName=combined.map(obj=>obj.name);
let sortedmarks=combined.map(obj=>obj.marks);
console.log(sortedName);//[ 'Shyam', 'Hari', 'Mira', 'Ram' ]
console.log(sortedmarks);//[ 6, 3, -2, -5 ]