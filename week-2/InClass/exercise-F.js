function checkingUsers(username,usertype){
    if(usertype == "admin" || usertype == "manager"){
        console.log("Username Valid")
    }else if (username[0] == username[0].toUpperCase() && username.length >= 5 && username.length <=10 ){
    console.log("Username Valid")
    }else
    console.log("Username Invalid")
}


checkingUsers("aaaaa" ,"admin");
checkingUsers("Aaaaa" ,"manager");
checkingUsers("aaaaa" ,"student");

