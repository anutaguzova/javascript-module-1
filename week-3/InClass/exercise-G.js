const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function age(year) {
    return 2022 - year;
}

const canDrive = years.filter(e => age(e) >= 17);

console.log(`These are the birth years of people who can drive: ${canDrive.join(", ")}`)
