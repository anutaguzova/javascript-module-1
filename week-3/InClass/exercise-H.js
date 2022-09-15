  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];


  function checkName(name, array){
    if(array.includes(name)){
      return "Found me"
    }else{
      return "Havent found me"
    }
  }


  console.log(checkName("James", namesArray));