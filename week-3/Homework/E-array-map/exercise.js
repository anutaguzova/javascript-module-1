// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numebers100 = numbers.map( el => el * 100);

let numebersmultiply = numbers.map( function (el) {
    return el * 100;
});

console.log(numebers100);
console.log(numebersmultiply);

