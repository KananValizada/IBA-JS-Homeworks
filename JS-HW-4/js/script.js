function createNewUser(firstName,lastName){
 this.firstName=firstname;
 this.lastName=lastname
 this.getLogin = () => (this.firstName[0] + this.lastName).toLowerCase() 
 this.setFirstName =  (newFirstName) => this.firstName = newFirstName
 this.setLastName =  (newLastName) => this.lastName = newLastName
}
let firstname =prompt("enter your name");
let lastname = prompt("enter your surname");
let newUser = new createNewUser(firstname,lastname)
console.log(newUser.getLogin())