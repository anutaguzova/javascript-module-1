function numberChecker(num) {
  if (num > 20) { //That's the condition
    return `${num} is greater than 20`; //If number is greater than 20 it will print the num is greater than 20
  } else if (num === 20) { //If number is strickly equal to 20 
    return `${num} is equal to 20`; //it will print the num is equal to 20
  } else if (num < 20) {  //If number is less than 20 
    return `${num} is less than 20`; // it will print the num is less than 20
  } else {
    return `${num} isn't even a number :(`; //If we use string it will shows us this output
  }
}

console.log(numberChecker("20"))