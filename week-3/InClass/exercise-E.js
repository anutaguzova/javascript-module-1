function age(birthYear) {
    return 2022 - birthYear
}

const birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

const ages = birthYear.map(age)

console.log(ages)
console.log(birthYear)
