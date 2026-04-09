/*
events:user inputs
Click(Mouse events:CLick,MouseUp,MouseDown, MouseHover)
Type(KeyBoard events:keypress)
Submit(form)
change(Dropdown)

UI : HTML, CSS, JS

Car Start: Key 

Click -->  Ui Change

Clcik --> Capture --> type  --> change
 */

//  <button>Submit</button><br>
//    <input type="text" name="MyText" id="">

//    <select name="" id="">
//     <option value="1">1</option>
//      <option value="2">2</option>

//    </select>
//    <br>

//    <a href="https://google.com">Click me</a>
//    <script src="event.js"></script>

let btn=document.getElementsByTagName("button")[0];

btn.addEventListener("click",function(){
    let el=document.createElement("h1");

el.textContent="i am clicked";
document.body.appendChild(el);
})