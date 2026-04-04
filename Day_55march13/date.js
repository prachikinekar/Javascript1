//Issue:resolution
// date object methods

/**
//  Date object Methods:
1.toString()
2.toLocalStriing(locales,options)
3.toDateString()
4.toTimeString()
5.toLocaleTimeSTring()

// *Action:converting date object into string  in more readable format & able to  configure it
Return:String

// configurable object:
*local arguments:
 - `"en-US"`: English (United States)
    - `"en-GB"`: English (United Kingdom)
    - `"fr-FR"`: French (France)
    - `"de-DE"`: German (Germany)
    - `"zh-CN"`: Chinese (Simplified, China)

* optional aurguments object values:
    - Date Options:
        - `weekday`: `"long"`, `"short"`, `"narrow"`
        - `year`: `"numeric"`, `"2-digit"`
        - `month`: `"numeric"`, `"2-digit"`, `"long"`, `"short"`, `"narrow"`
        - `day`: `"numeric"`, `"2-digit"`
    - Time Options:
        - `hour`: `"numeric"`, `"2-digit"`
        - `minute`: `"numeric"`, `"2-digit"`
        - `second`: `"numeric"`, `"2-digit"`
        - `timeZoneName`: `"short"`, `"long"`
    - Other Options:
        - `timeZone`: `"UTC"` or an IANA time zone name like `"America/New_York"`
        - `hour12`: `true` for 12-hour time (AM/PM), `false` for 24-hour time

  toLocalString('default', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' });
  
  toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' });
*/

let time=new Date();
console.log(time);//2026-03-16T15:21:53.747Z

console.log(time.toString());//Mon Mar 16 2026 20:52:35 GMT+0530 (India Standard Time)

console.log(time.toDateString());//Mon Mar 16 2026

let a=time.toLocaleString('default',{year:'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC'});//03/17/2026, 04:59:31
console.log(a);//03/17/2026, 05:01:50

let dateString=time.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
console.log(dateString);//Tuesday, March 17, 2026

let timeString=time.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'long' });
console.log(timeString);//10:36:21 AM India Standard Time

