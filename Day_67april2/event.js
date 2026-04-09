/*
 events:user inputs
 click(Mouse events:click,mouseUp, MouseDown, MouseHover)
 Type(Keyboard events:keypress)
 Submit (Form)
 Change (DropDown)  

 UI=HTML,CSS,JS
 Car Start: Key 

Click -->  Ui Change

Click --> Capture --> type  --> change

 Events: 

- `click`
- `mouseover`
- `mouseout`
- `keydown`
- `keyup`
- `submit`
- `change`
 
 */
// Mouse events

let btn=document.getElementsByTagName("button")[0];
btn.addEventListener("click",function(){
    let el=document.createElement("h1")
    el.textContent="I am clicked"
    document.body.appendChild(el)
    btn.style.backgroundColor='green'
})

btn.addEventListener("mouseover",function(){
    btn.style.backgroundColor="yellow"
})

btn.addEventListener("mouseout",function(){
    btn.style.backgroundColor="purple"
})

// keyboard Events:
let inputTextBox=document.getElementsByTagName("input")[0];
inputTextBox.addEventListener("keydown",function(){
    inputTextBox.style.backgroundColor="orange"
})

inputTextBox.addEventListener("keyup",function(){
    inputTextBox.style.backgroundColor="grey"
})

// Change Event

// Event Object: target, type

let dropDown=document.getElementById("DropDown");
dropDown.addEventListener("change",(event)=>{
    console.log(event.type)
    console.log(event.target)
    console.log("DropDown Value Changed to: ", dropDown.value);
})

// preventDefault()
let link=document.getElementById("Link");
link.addEventListener("click",(event)=>{
    event.preventDefault()
    //  console.log("User clicked")
    console.log("user not navigating")
  
})