const peopleInClass = ["Ali","Abu Bakar","Muazzam","Zakaria","Ibnul"];
const anotherClass = ["Mustafa","john","Alejandro"];
const joinedClasses = peopleInClass.concat(anotherClass);
console.log(joinedClasses.sort());

function splittingName(names,arrayOfNames){
    if(arrayOfNames.includes(names)){
        return `${names} is in the class with ${peopleInClass}`
    }else{
        return `${names} is in not the class with ${peopleInClass}`   
    }
}

console.log(splittingName("Yun",joinedClasses));
console.log(splittingName("Ali",joinedClasses));