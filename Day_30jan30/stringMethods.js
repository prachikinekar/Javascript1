/*
StartsWith(substring)
endsWith(substring)
concat(joiner,joining element)
padStart(string length,padElement)
repeat(count)
replace(targetString,replacerString)
replaceAll(targetString,replacerString)
 */

// startsWith(substring)

// "Javascript"
//  0123456789
//  "Ja"--->substring

// console.log("Javascript".startsWith("va"));//false
// console.log("Javascript".startsWith("Ja"));//true
// console.log("Javascript".startsWith("va",2));//true

//endsWith(substring)
// console.log("Javascript".endsWith("pt"));//true
// console.log("Javascript".endsWith("ri"));//false
// console.log("Javascript".endsWith("ri",8));//true

// // concat(...strings: string[])
// console.log("Javascript".concat("hii"));
// console.log("Javascript".concat("*","hii","Ts"));//JavaScript*HITS

// // padStart(String length,padElement)
// console.log("javaScript".padStart(12,"HI"))//HIJavascript
// console.log("javaScript".padStart(14,"HI"))//HIHIjavaScript

// padEnd(string length, padElement)

// console.log("JavaScript".padEnd(14,"Hi"));//JavaScriptHiHi

// repeat(count):
// console.log("Javascript".repeat(3));//JavascriptJavascriptJavascript

// // replace(targetString,replacerString)
// console.log("Javascript".replace("a","A"));//JAvascript

// // replaceAll(targetString,replacerString)
// console.log("javascript".replaceAll("a","A"));//jAvAscript

/*
search string:
search(string/Regexp)
indexof(string,index(startpoint))
lastIndexOf(string, index(startPoint))
includes(subString, index(startPoint))
*/

// search(string/RegExp)
console.log("JavaScript".search("a"));//1
console.log("JavaScript".search("ava"));//1
console.log("Javascript".search("t"));//9

// indexof(string,index(startPoint))
console.log("Javascript".indexOf("t"));//9
console.log("Javascript".indexOf("av"));//1

console.log("Javascript".indexOf("a"));//1

console.log("Javascript".indexOf("a",2));//3

// second occurance
let firstOccurence="Javascript".indexOf("a");//1
let secondOccurence="Javascript".indexOf("a",firstOccurence+1);
console.log(secondOccurence);//3

