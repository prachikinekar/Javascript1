// //1. Write a program to print all the even numbers from an array.

// let arr=[1,2,3,4,5]
// let output=arr.filter(function(ele,ind,arr){
//     return ele%2==0
// })
// console.log(output)//[ 2, 4 ]

// // 2. write a program to count how many even numbers are there in an array.
let arr1=[1,2,3,4,5,6,8];
let output=arr1.filter(ele=>ele%2==0).length;
console.log(output);//4

// //3. write a program to find the sum of all the digits of an array.
// // let arr=[1,2,3,4,5,6,7,8,9];
// // let sum=arr.reduce((total,ele)=>total+ele,0);
// // console.log("Sum of array elements",sum);//Sum of array elements 45

// // 4.write a program to find the 2nd largest number from an array.
// // let arr2=[1,2,3,4,5,6,7,8];
// // arr2.sort((a,b)=>b-a);//[8, 7, 6, 5, 4, 3, 2, 1 ]
// // console.log(arr2[1]);//7


// // 5. write a program to delete the duplicate elements from an array.



// // 6.write a program to print the first non-repeated number in an array.

// let arr = [2, 3, 4, 2, 3, 5, 6, 5];
// let output5 = arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
// console.log(output5);









// //8. take 2 arrays and print only the common elements from the arrays.

// // let arr1=[1,2,3,4,5];
// // let arr2=[2,4,5,7,1];

// // let output2=arr1.filter(ele=>arr2.includes(ele));
// // console.log(output2);//[ 1, 2, 4, 5 ]



// //10. write a program to check if all the elements in an array are even.
// let arr6=[1,2,3,4,5,7,8,9];
// let output=arr6.every(ele=>ele%2==0)
// console.log(output);//

// //11. declare array of employees & sort them in ascending order (empId)
// let emp=[];

// //12. declare array of employees & sort them in ascending order by name.



// //19. intersection of 2 number arrays

// // let arr1=[1,2,3,4,5];
// // let arr2=[2,3,4,5];

// // let output=arr1.filter(num=>arr2.includes(num));
// // console.log(output);

// // 16. convert array of letters to array of words
// 	// 	const inputArr = [ 
// 	// 			'b', 'a', 'k', 'e', '',
// 	// 			'c', 'a', 'k', 'e', '',
// 	// 			'e', 'a', 't'
// 	// 			];
// 	// //    output = ['bake','cake','eat'];


//     // let outputarr=inputArr.join('').split('');
//     // console.log(outputarr);

// // let inputArr = [ 
// // 'b','a','k','e','',
// // 'c','a','k','e','',
// // 'e','a','t'
// // ];

// // let output = inputArr.join('').split(' ');

// // console.log(output);


// // 11. declare array of employees & sort them in ascending order (empId)
// let empId=[3,6,7,4,8,10,9,12];
// let id=empId.sort((a,b)=>a-b);
// console.log(id);

// // 12. declare array of employees & sort them in ascending order by name.

// let empName=["hemma","prachi","vaish","krish","ansh"];
// let ascName=empName.sort();
// console.log(ascName);//[ 'ansh', 'hemma', 'krish', 'prachi', 'vaish' ]


// //13. declare array of employees & filter the employees whose sal>6000;
// // let empSal=[5000,6000,8000,9000,4000,3000];
// // let sal=empSal.filter((ele)=>ele>6000);
// // console.log(sal);//[ 8000, 9000 ]

// // 14. declare array of employees & increase sal of every employee by 500;
// let empSal=[5000,6000,8000,9000,4000,3000];
// let incSal=empSal.map((ele)=>ele+500);
// console.log(incSal);//[ 5500, 6500, 8500, 9500, 4500, 3500 ]


// // 19. intersection of 2 number arrays
// // let arr4=[1,2,3,4,5];
// // let arr6=[2,3];
// // let inter=arr4.filter((num)=>arr6.includes(num))
// // console.log(inter);//[ 2, 3 ]

// // 20. WAP to print the occurance of each elements 
// //     input = [10,20,30,40,50,10,30,50]
// // 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

// // let input1=[10,20,30,40,50,10,30,50];
// // let output=input1.map(function(ele,index,input1){
// // return [ele+":"+index];

// // })
// // console.log(output);

// // 9. write a program find missingNumber in a series.
// //    input:- [2, 5, 1, 4, 9, 6, 3, 7];  output:- 8

// let arr9=[2, 5, 1, 4, 9, 6, 3, 7];
// for(let i=1;i<=9;i++){
// 	if(!arr9.includes(i)){
// console.log(i);//8
// 	}
// }

// 17. add Dept info for each employee
//     employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
// 				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
// 	departments = [{ eId: 101, dept: "sales" },
// 				{ eId: 104, dept: "marketing" }]


// let employees = [
//     { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
//     { eId: 104, name: "reena", sal: 8000, gender: "female" }
// ];

// let departments = [
//     { eId: 101, dept: "sales" },
//     { eId: 104, dept: "marketing" }
// ];

// for (let i = 0; i < employees.length; i++) {
//     for (let j = 0; j < departments.length; j++) {
        
//         if (employees[i].eId === departments[j].eId) {
//             employees[i].dept = departments[j].dept;
//         }
        
//     }
// }

// console.log(employees);


// 20. WAP to print the occurance of each elements 
// input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

// let input = [10,20,30,40,50,10,30,50];
// let count=0;
// for(let i=0;i<=input.length-1;i++){
// 	for(let j=0;j<=input.length-1;j++){
// 		if(input[i]==input[j]){
// 			count++;
			
// 		}
// 	}
// 	console.log(input[i]+":"+count);
// }


