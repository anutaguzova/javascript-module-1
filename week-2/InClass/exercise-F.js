function isUserValid(username, usertype) {
    if (usertype =="admin" || usertype =="manager") {
        return "Username valid" ;
    } else if (username[0] == username[0].toUpperCase() && username.length <=10 && username.length >= 5) {
      return "Username valid" ;
    } else {
      return  "Username invalid";
    }
  }
  
  
  console.log(isUserValid("anaa", "managerss"));