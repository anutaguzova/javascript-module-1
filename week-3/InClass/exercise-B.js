const arr = ["table", "laptop", "pencil", "phone"];
const newArr = ["monitor", "calendar", "notes", "phone"];

const combArr = arr.concat(newArr);
console.log(combArr.sort());

function inclInArr(name, arr) {
    if (!arr.includes(name)) {
        return `${name} is not at the class with ${arr.join(", ")}`
    } else {
        return `${name} is at the class with ${arr.join(", ")}`
    }
}

console.log(inclInArr("pencil", ["monitor", "calendar", "notes", "phone"]))