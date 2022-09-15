const people = ["ali", "hafiz", "dani"];
const people2 = ["muazzam", "hassan"];
const newPeople = people.concat(people2);
console.log(newPeople.sort());

const checkIfInTheArray_arrow = (name, array) => {
  if(array.includes(name)){
    modified_array = [...array]
    modified_array.splice(array.indexOf(name),1)
    const otherPeople = modified_array.join(", ")
    return `${name} is in the class with ${otherPeople} `
  }else{
    return `${name} is not in the class with ${array.join(", ")}`
  }
}
console.log(checkIfInTheArray_arrow("Linda",newPeople))