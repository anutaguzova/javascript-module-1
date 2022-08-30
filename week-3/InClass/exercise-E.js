function magician(yourFunc) {

    const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

    const magicOutput = yourFunc(years);

    return magicOutput;
}

function superArr(arr) {
    return arr.map(year => 2022 - year)
}

console.log(magician(superArr))