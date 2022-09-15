function checkUserName(username, usertype){
    if (usertype == "admin" || usertype == "manager"){
        console.log("Usertype valid");
    }
    else if(username[0] == username[0].toUpperCase() && username.length <= 10 && username.length >= 5){
        console.log("username valid");
    }
    else {
        console.log("user is  invalid");
    }
}

checkUserName("abc", "student")
checkUserName("Abcdef", "manager")
checkUserName("abds", "admin")