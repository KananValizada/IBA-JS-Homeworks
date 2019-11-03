let firstname;
let lastname;
let birthday;
let newUser

function createNewUser(){
firstname =prompt("enter your name");
lastname = prompt("enter your surname");
birthday = prompt("enter your birthday","dd.mm.yy")
newUser = { 
    firstname,
    lastname,
    getLogin:function(){
      return (this.firstname[0] + this.lastname).toLowerCase()
    },
    getAge:function(){
        let now =new Date()
        let year =now.getFullYear()
        return year - parseInt(birthday.split(".")[2])
    },
    getPassword:function(){
        return firstname[0].toUpperCase()+lastname.toLowerCase()+birthday.split(".")[2]

    }
}
}

createNewUser()
console.log(newUser.getLogin())
console.log(newUser.getAge())
console.log(newUser.getPassword())


