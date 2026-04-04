// Reverse the given sring using for loop
let str="javascript";
//       0123456789
// length === last index+1
// length-1 === last index

let revStr="";
for(let i=0;i<=str.length-1;i++){
    revStr=str[i]+revStr;
}
console.log(revStr);

for(let i=str.length-1;i>=0;i--){
    revStr+=str[i];
}
console.log(revStr);