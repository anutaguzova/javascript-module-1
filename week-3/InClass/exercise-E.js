const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function age(birthYear){
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}


function ageArray(array){
  return array.map(age);
}

console.log(ageArray(birthYears));