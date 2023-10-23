//region Element Reference
const btnRegister = document.getElementById("register");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const spanMessage = document.getElementById("message");
//endregion

//region variables
let _email, _password, _repassword = "";
let users = [];
//endregion

//region Events
email.addEventListener("change", function(e){
    _email = e.target.value;
});

password.addEventListener("change", function(e){
    _password = e.target.value;
});

repassword.addEventListener("change", function(e){
    _repassword = e.target.value;
});

btnRegister.addEventListener("click", function(e){
    e.preventDefault();
   addUser();
   console.log(users)
});
//end region

//region Functions
function addUser(){
    let newUser = {
        email: _email,
        password: _password,
    };
   users.push(newUser); 
}

//endregion

//region Clases
class User {
    constructor(email, password, repassword){
        this.email = email;
        this.password = password;
        this.repassword = repassword;
    }
}
//endregion