/* 

# Set Methods ==> we can custmize date & time
  Two Ways:
    A. Use Get method + increment/Decrement Pass it to set methods
    B. Using set methods :

        1. setFullYear()	   Set the year (optionally month and day)
        2. setMonth()	   Set the month (0-11)
        3. setDate()	   Set the day as a number (1-31)
        4. setHours()	   Set the hour (0-23)
        5. setMinutes()	   Set the minutes (0-59)
        6. setSeconds()      Set the seconds (0-59)

*/
let time=new Date();
// console.log(time.setFullYear(2030));
// console.log(time);//2030-03-19T16:10:56.941Z

// // Date:
// time.setFullYear(2030,0,20);
// console.log(time);//2030-01-20T16:11:55.786Z 

// time.setMonth(0);
// console.log(time);//2030-01-20T16:12:40.262Z 

time.setMonth(0,23);
console.log(time);//2026-01-23T16:13:33.875Z

time.setDate(22);
console.log(time);//2026-01-22T16:14:03.538Z

// time
time.setHours(1);
console.log(time.toLocaleTimeString());//1:47:17 AM

time.setMinutes(1);//1:49:49 AM
console.log(time);


time.setSeconds(50);
console.log(time.toLocaleTimeString());//1:01:50 AM