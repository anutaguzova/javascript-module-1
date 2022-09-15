const name = ["James","Ali","Manpreet","Lucia"]
function amIHere(name){
    if(name.includes(name)){
        return "Found me"
    }else{
        return "Haven't Found me"
    }
}

console.log(amIHere("James"));