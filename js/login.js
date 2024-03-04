let signUpButton = document.getElementById("signUp");
let signInButton = document.getElementById("signIn");
let container = document.getElementById("container");
let signUpForm=document.getElementById("signUp-form")
let signInForm=document.getElementById("signIn-form");
let username=document.getElementById("username");
let password=document.getElementById("password");
let loginEmail=document.getElementById("email-id");
let loginPassword=document.getElementById("pwd");
let passwordMessageItems = document.querySelectorAll(".password-message-item"); 
let passwordMessage = document.getElementById("password-message");
let showPassword=document.getElementById("passType");
let signUpShowPass=document.getElementById("typePass");
let upperCaseCheck = /[A-Z]/g; 
let lowerCaseCheck = /[a-z]/g;  
let numberCheck=/[0-9]/g;
let specialCharactersCheck = /[!@#$%^&*]/g; 
let emailCheck=/\S+@\S+\.\S+/;

signUpShowPass.addEventListener('change', function() {
    if (this.checked) {
      loginPassword.type="text";
    } else {
        loginPassword.type="password";
    }
  });

showPassword.addEventListener('change', function() {
    if (this.checked) {
        password.type="text";
    } else {
        password.type="password";
    }
  }); 
password.onfocus = function () { 
    passwordMessage.style.display = "block"; 
}

password.onblur = function () { 
    passwordMessage.style.display = "none"; 
}

password.onkeyup = function () {  
    
    if (password.value.match(upperCaseCheck)) { 
        passwordMessageItems[0].classList.remove("invalid"); 
        passwordMessageItems[0].classList.add("valid"); 
    } else { 
        passwordMessageItems[0].classList.remove("valid"); 
        passwordMessageItems[0].classList.add("invalid"); 
    } 
    
    if (password.value.match(lowerCaseCheck)) { 
        passwordMessageItems[1].classList.remove("invalid"); 
        passwordMessageItems[1].classList.add("valid"); 
    } else { 
        passwordMessageItems[1].classList.remove("valid"); 
        passwordMessageItems[1].classList.add("invalid"); 
    } 
   
    if (password.value.match(numberCheck)) { 
        passwordMessageItems[2].classList.remove("invalid"); 
        passwordMessageItems[2].classList.add("valid"); 
    } else { 
        passwordMessageItems[2].classList.remove("valid"); 
        passwordMessageItems[2].classList.add("invalid"); 
    } 
        
    if (password.value.match(specialCharactersCheck)) { 
        passwordMessageItems[3].classList.remove("invalid"); 
        passwordMessageItems[3].classList.add("valid"); 
    } else { 
        passwordMessageItems[3].classList.remove("valid"); 
        passwordMessageItems[3].classList.add("invalid"); 
    }

    if (password.value.length >= 8) { 
        passwordMessageItems[4].classList.remove("invalid"); 
        passwordMessageItems[4].classList.add("valid"); 
    } else { 
        passwordMessageItems[4].classList.remove("valid"); 
        passwordMessageItems[4].classList.add("invalid"); 
    } 
    
    if (password.value.length > 0 && password.value.length <= 16) { 
        passwordMessageItems[5].classList.remove("invalid"); 
        passwordMessageItems[5].classList.add("valid"); 
    } else { 
        passwordMessageItems[5].classList.remove("valid"); 
        passwordMessageItems[5].classList.add("invalid"); 
    } 
}

function handleRegistration(event){
        event.preventDefault();
    let users=JSON.parse(localStorage.getItem('users'))||[];
    let existingUser=users.find(function(user){
       return user.username === username.value;
    })
    if(existingUser) {
        alert ("This Username is already taken!");
    }else{
        if(username.value.match(emailCheck)){
            if(password.value.length>=8 && password.value.match(upperCaseCheck) && password.value.match(lowerCaseCheck) && password.value.match(numberCheck) && password.value.match(specialCharactersCheck) && password.value.length<=16){
                users.push({username:username.value , password:password.value});
                localStorage.setItem('users', JSON.stringify(users)); 
                alert("Registration successful !");
                username.value="";
                password.value="";
                for(let i=0; i<passwordMessageItems.length; i++){
                    passwordMessageItems[i].classList.remove("valid");
                    passwordMessageItems[i].classList.add("invalid"); 
                }    
            }else {
                alert("please enter valid password");
            }
        }else{
            alert("Enter valid Email address");
        }
        
    }
    
}

function loginHandling(event){
    event.preventDefault();
    let users=JSON.parse(localStorage.getItem('users'))||[];
    let authenticatedUser=users.find(function (user) {
        return user.username===loginEmail.value && user.password===loginPassword.value;
    });
    if(authenticatedUser){
        if(loginEmail.value.match(emailCheck)) {
            window.location.href="./swiggy.html"
            loginEmail.value="";
            loginPassword.value="";
        }else{
            alert("Please Enter Valid Email Address");
        }
    }else{
        alert("Invalid username or password");
    }
    
}
signUpForm.addEventListener("submit", handleRegistration);
signInForm.addEventListener( "submit", loginHandling);

signUpButton.addEventListener("click", function (){
	container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", function (){
	container.classList.remove("right-panel-active");
});

