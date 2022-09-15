// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multipliedHundredTimes(num){
    return num  * 100
}

//Map method
const numberHundredTimes = numbers.map(multipliedHundredTimes)

// funtion with name
const numberHundredTimes2 = numbers.map(function multipliedHundredTimes(num) {
    return num * 100;
});

//function without name
const numberHundredTimes3 = numbers.map(function (num) {
    return num * 100;
});

//function using Arrow Function
var numberHundredTimes4 = numbers.map(num => {
    return num * 100
});

// Shorter Arrow function 
var numberHundredTimes5 = numbers.map(num => num * 100);

console.log(numberHundredTimes)
console.log(numberHundredTimes2);
console.log(numberHundredTimes3);
console.log(numberHundredTimes4);
console.log(numberHundredTimes5);
