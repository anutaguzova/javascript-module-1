const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function age(birthYear){
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}


function ageArray(array){
  return array.map(age);
}

function getDrivers(array){
  return array.filter(function(e){
    return age(e) >= 17;
  })
}


console.log(getDrivers(birthYears));