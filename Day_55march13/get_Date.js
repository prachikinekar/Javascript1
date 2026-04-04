/*
// Get methods==>
    1.getFullYear() Get year as a four digit number (yyyy)
    2.getMonth() Get month as a number(0-11)
    3. getDate()	    Get day as a number (1-31)
    4. getDay()	    Get weekday as a number (0-6)
    5. getHours()	    Get hour (0-23)
    6. getMinutes()	    Get minute (0-59)
    7. getSeconds()	    Get second (0-59)
    8. getMilliseconds()  Get millisecond (0-999)
 
    * Action: as per the method collecting that portion from date object
    * Return: number

 */

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let time=new Date();

console.log(time.getFullYear());//2026
console.log(time.getMonth());//2
console.log(months[time.getMonth()]);//March

console.log(time.getDate());//17
console.log(time.getDay());//2
console.log(days[time.getDay()]);//Tuesday

// time
console.log(time.getHours());//11
console.log(time.getMinutes());//22
console.log(time.getSeconds());//52
console.log(time.getMilliseconds());//867

