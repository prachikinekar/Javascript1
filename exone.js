var a=10;
console.log("line num 1",a);//10

function fn(){
    console.log("line num 2",a);//
    var a=28;
    a++;
    console.log("line num 3",a);
    if(a){
        var a=30;
        a++;
        console.log("line num 4",a);
    }
   console.log("line num 5",a);
}
console.log("line num 6",a);
fn();