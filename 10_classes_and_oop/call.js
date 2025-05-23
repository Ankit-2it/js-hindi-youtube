
function setname(username){
    this.username = username

    console.log('rendring');
    
}
// in this function we want : "setting the value of username" is done by any outer funtion
function detailUser(username, email, address){
    setname.call(this, username)   //here we are passing the 'this' reference along with username in order to keep the vlaue and work of outer function which is called explicitly [as the outer func ends, its execution context also ends and its work also ends]
    this.email = email;
    this.address = address;
}

const user1 = new detailUser("Ankit", "ok@notok.com", "Haryana")
console.log(user1);
