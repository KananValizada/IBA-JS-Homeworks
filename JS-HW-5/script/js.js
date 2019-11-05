let firstname;
let lastname;
let birthday;
let newUser

function createNewUser(){
firstname =prompt("enter your name");
lastname = prompt("enter your surname");
birthday = prompt("enter your birthday","dd.mm.yyyy")
newUser = { 
    firstname,
    lastname,
    getLogin:function(){
      return (this.firstname[0] + this.lastname).toLowerCase()
    },
    getAge:function(){
        let now =new Date()
        let year =now.getFullYear();
        let month=now.getMonth() +1
        let day =now.getDate()
        if(birthday.split(".")[1]<month ){
            return year - parseInt(birthday.split(".")[2])
        }else if(birthday.split(".")[1]==month){
            if(birthday.split(".")[0]<=day){
                return year - parseInt(birthday.split(".")[2])
            }else {
                return year - parseInt(birthday.split(".")[2]) -1
            }
        }else{
            return year - parseInt(birthday.split(".")[2]) -1
        }
        
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


