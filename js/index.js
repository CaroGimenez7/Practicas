//region Element Reference
const btnRegister = document.getElementById("register");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const spanMessage = document.getElementById("message");
const usersList = document.getElementById("usersList");
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
   validateUser();
   addUser();
   refresh();
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

function refresh(){
    usersList.innerHTML = "";
    users.forEach(function(user) {
         let li = document.createElement("li");
         let spanMail = document.createElement("span");
        spanMail.style.color = "green";
        spanMail.innerText = user.email;
        li.appendChild(spanMail);
        usersList.appendChild(li);
    })

    ;
}

function validateUser() {
    if (!_email || _email.trim() === "" ) {
        throw new Error("El email es obligatorio");
    }
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

{/* <input  id= "email" type="email" placeholder="Example@example.com"></input> */}

//?input creado con POO para crear un objeto de tipo html con la funcion draw que dibuja al elemento.
// const inputElement = {
//     type: "email",
//     placeholder: "Example@example.com",
//     htmlElementType: "input",
//     draw: function(){
//         return `<${this.htmlElementType} type=${this.type} /> `
//     },
// };

// console.log(inputElement.draw());