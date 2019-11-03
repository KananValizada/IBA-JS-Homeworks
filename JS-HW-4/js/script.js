let firstname;
let lastname
let newUser
function createNewUser(){
firstname =prompt("enter your name");
lastname = prompt("enter your surname");
newUser = { 
    firstname,
    lastname,
    getLogin:function(){
      return (this.firstname[0] + this.lastname).toLowerCase()
    }  
}
}

createNewUser()
console.log(newUser.getLogin())


