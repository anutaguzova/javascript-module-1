var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

let arr = [mentor1, mentor2, mentor3, mentor4, mentor5];

function sayName(name) {
    return name.toUpperCase();   
}

function createGreeting(name) {
    let upperName = sayName(name);
    let message = `HELLO ${upperName}`
    return  message;
}


for (let i = 0; i < arr.length;  i++) {
    let greeting = createGreeting(arr[i]);
    console.log(greeting);
}
