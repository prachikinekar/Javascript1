/* 
Javascript stores dates as number of milliseconds since january 01,1970.
// Ways of creating Date Objects:
1.new Date()
2.new Date(milliseconds)
3.new Date(date string)
e.g:new Date("2023-03-28")
4.new Date(year,month,day,hours,minutes,seconds,ms)
Javascript counts months from 0(january)to 11(December).

 */

// Time/clock create in js:

let timeObj=new Date();
console.log(timeObj);//2026-03-14T12:02:20.278Z

timeObj=new Date(1000);
console.log(timeObj);//1970-01-01T00:00:01.000Z

timeObj=new Date("2028-01-01");
console.log(timeObj);//2028-01-01T00:00:00.000Z

timeObj=new Date(2029,1,1,21,12,2,34);
console.log(timeObj);//2029-02-01T15:42:02.034Z 

// Issue :resolution
// date object methods 

//get date--->retrieve date

// set date-->update date

