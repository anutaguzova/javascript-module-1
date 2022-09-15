function ageOfPerson (name,age){
    const d = new Date(); // Date is a function
    let year = d.getFullYear();
    const exactYear = year - age;
    const message = `Hello my name is ${name}, I was born in ${exactYear}`;
    console.log(message);
    return  message; 
     
  }
  ageOfPerson ("Ali", 20);
