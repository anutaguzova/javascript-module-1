const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function myName(name) {
    return names.includes(name) ? "Found me!!" : "Have not found me (("
}

console.log(myName("Anna"))
console.log(myName("Mozafar"))