// let firstName = "Naman Saxena";
// let age = "23";
// let isMarried = true;

// // console.log("This is " + firstName +" his age is " + age+ " and he is " + isMarried + " married" );

// if(isMarried == true){
//     console.log(firstName + " is married");
// }
// else{
//     console.log(firstName + " is not married");

// Write a program that count from 0 - 100 and prints using (forloop)
// let answer = 0;

// for (let i=0; i<=100; i++){
//     answer = answer + i;
// }

// console.log(answer);

// write a program to greet a person based on their gender whether its male or female

// let firstname = "Hello Naman saxena";
// let secondname= "Hello Harshita";
// let gender = "male";

// if (gender == "female"){
//     console.log(firstname);
// }
// else{
//     console.log(secondname);
// }

// const personArray = ["Naman" , "Ishit" , "om"];

// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);

// Write a program to print all the even numbers from an array
// const ages = [21,  22 , 23 , 24 , 25];
// const numberofpeoples= ages.length;

// for(let i = 0; i < numberofpeoples; i++){
// if (ages[i] % 2 == 0){
//     console.log(ages[i]);
// }
// }

// Write a program to print the biggest number in an array
// constArray = [10,20,30,40,50,60,70,80,90,1000];
// let max= constArray[0];
 
// for(let i = 1; i < constArray.length; i++){
//     if(constArray[i] > max){
//         max = constArray[i];
//     }
// }

// console.log(max)

// Write a program to print names of only males from a complex object 
// const personArray = ["Naman" , "Ishit" , "Priya"];
// const genderArray = ["male" , "male" , "female"];

// for(let i=0; i < personArray.length; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }

// objects:

// const users1= {
//      firstName : "Naman",
//      gender : "male"
// }

// console.log(users1["gender"]);

// const users1={
//     firstName : "Naman",
//     gender : "male"
// }    

// console.log(users1["firstName"]);

// array of objects:

// const allUsers= [{
//     firstName: "Naman",
//     gender: "male"
// },{
//     firstName: "Tinnu",
//     gender: "male"
// },{
//     firstName: "Akriti",
//     gender: "female"
// }]
// for(let i=0; i < allUsers.length; i++){
//     if(allUsers[i]["gender"] == "male"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

// functions:

// write a function to print sum of two numbers
// function sum(a,b){
//     return a + b;
// }

// const value = sum(20,1000);
// console.log(value);

// Callbacks:

// function calculateArithmetic(a, b, arithmeticFinalFunction){
//     const ans  = arithmeticFinalFunction(a,b);
//     return ans;
// }

// function sum(a,b){
//     return a + b;
// }

// const value = calculateArithmetic(2, 6, sum);
// console.log(value);

// function value = calculatorArithmetic()

// setTimeout() :

// function Greet(){
//     console.log("Hello World");
// }

// function Alien(){
//     console.log("Hello Alien");
// }
// setTimeout(Alien, 3 * 1000);

// setInterval() :

// function greet(){
//     console.log("Hello World");
// }

// function alien(){
//     console.log("hello alien")
// }
// setInterval(alien, 1 * 1000);

//