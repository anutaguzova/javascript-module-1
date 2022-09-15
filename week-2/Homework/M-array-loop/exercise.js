/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
 
 function letterArr(days,letter){
  for (let i = 0; i<days.length; i++){
  if(days [i] [0] == letter){
    console.log( days[i]);
  
 }
 }
 }
letterArr(daysOfWeek,"T")