//function take age and display birth year

function birthYear(age) {
    const currentYear = 2022;
    let birthYear = currentYear - age;
    return birthYear
}
let year = birthYear(27)
console.log(year);

//function take name and age and display a message with name, age and birth year in sentence

function statement(name, age) {
    let message = `hi, i am ${name} i am ${age} years old, i was born in ${year}`;
    return message
}
let answer = statement("muazzam", 27)
console.log(answer)