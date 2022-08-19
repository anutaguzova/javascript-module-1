function isYearBirth(age) {
    let currentYear = new Date().getFullYear();
    return currentYear - age;
}

let yearBirth =  isYearBirth(34);

console.log(yearBirth)

function isMessage(age, name) {
    let year = isYearBirth(age);
    return "My name is " + name + ". " + "I was born in " + year;
}

let message =  isMessage(34, "Hanna");

console.log(message)
