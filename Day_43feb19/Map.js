/*

Map set -->object
Es6 feature

 */

// let mapObject=new Map();
// console.log(mapObject);//Map(0) {}


// Object.entries(mapObject);//2D
// // [[key, value], [key, value]]

// class:

let mapObject=new Map([[[1,2],"Ts"],["Hi","JS"],["jii","pii"],["sii","ji"],["ooii","pii"]]);
// console.log(mapObject);

// Map(5) {
//   [ 1, 2 ] => 'Ts',
//   'Hi' => 'JS',    
//   'jii' => 'pii',  
//   'sii' => 'ji',   
//   'ooii' => 'pii'  
// }

for(let value of mapObject){
    console.log(value);
}
//[ [ 1, 2 ], 'Ts' ]
// [ 'Hi', 'JS' ]
// [ 'jii', 'pii' ]
// [ 'sii', 'ji' ]
// [ 'ooii', 'pii' ]


console.log(mapObject.size);//5

console.log(mapObject.keys());//[Map Iterator] { [ 1, 2 ], 'Hi', 'jii', 'sii', 'ooii' }
console.log(mapObject.values());//[Map Iterator] { 'Ts', 'JS', 'pii', 'ji', 'pii' }



console.log(mapObject.entries());
//[Map Entries] {
//   [ [ 1, 2 ], 'Ts' ],
//   [ 'Hi', 'JS' ],
//   [ 'jii', 'pii' ],
//   [ 'sii', 'ji' ],
//   [ 'ooii', 'pii' ]
// }


let mapObj=new Map();
console.log(mapObj);//Map(0) {}


// CURD
// set
mapObj.set("Hi","Js");
console.log(mapObj);//Map(1) { 'Hi' => 'Js' }
mapObj.set("B","TS");
console.log(mapObj);//Map(2) { 'Hi' => 'Js', 'B' => 'TS' }
mapObj.set([1,2],"Ts");
console.log(mapObj);//{ 'Hi' => 'Js', 'B' => 'TS', [ 1, 2 ] => 'Ts' }

// get()--->retrieve
console.log(mapObj.get("B"));//TS
console.log(mapObj.get("Hi"));//Js

// has()
console.log(mapObj.has("B"));//true
console.log(mapObj.has("TS"));//false

// delete()
console.log(mapObj);//Map(3) { 'Hi' => 'Js', 'B' => ' TS', [ 1, 2 ] => 'Ts' }
console.log(mapObj.delete("B"));//true
console.log(mapObj.delete("b"));//false
console.log(mapObj);//Map(2) {'Hi'=>'JS',[1,2]=>'TS'}






