// ===========================================
// ELEMENTS
// ===========================================

const loginForm = document.querySelector("#loginForm");

const email = document.querySelector("#email");

const password = document.querySelector("#password");

const loginBtn = document.querySelector("#loginBtn");

const togglePassword = document.querySelector("#togglePassword");

const remember = document.querySelector("#remember");

const googleBtn = document.querySelector("#googleLogin");

// ===========================================
// SHOW / HIDE PASSWORD
// ===========================================

if(togglePassword){

togglePassword.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

togglePassword.classList.remove("fa-eye");

togglePassword.classList.add("fa-eye-slash");

}

else{

password.type="password";

togglePassword.classList.remove("fa-eye-slash");

togglePassword.classList.add("fa-eye");

}

});

}

// ===========================================
// EMAIL VALIDATION
// ===========================================

function validateEmail(emailValue){

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return pattern.test(emailValue);

}

// ===========================================
// LOGIN
// ===========================================

function login(){

const emailValue=email.value.trim();

const passwordValue=password.value.trim();

if(emailValue===""){

alert("Please enter Email");

email.focus();

return;

}

if(!validateEmail(emailValue)){

alert("Enter a valid Email Address");

email.focus();

return;

}

if(passwordValue===""){

alert("Please enter Password");

password.focus();

return;

}

if(passwordValue.length<6){

alert("Password should be at least 6 characters");

return;

}

// Remember Me

if(remember.checked){

localStorage.setItem("savedEmail",emailValue);

}

else{

localStorage.removeItem("savedEmail");

}

// Loading Animation

loginBtn.innerHTML="Signing In...";

loginBtn.disabled=true;

// Demo Login

setTimeout(()=>{

alert("✅ Login Successful!");

window.location.href="dashboard.html";

},1800);

}

if(loginBtn){

loginBtn.addEventListener("click",login);

}

// ===========================================
// ENTER KEY
// ===========================================

document.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

login();

}

});

// ===========================================
// LOAD SAVED EMAIL
// ===========================================

window.onload=()=>{

const savedEmail=localStorage.getItem("savedEmail");

if(savedEmail){

email.value=savedEmail;

remember.checked=true;

}

};

// ===========================================
// GOOGLE LOGIN
// ===========================================

if(googleBtn){

googleBtn.addEventListener("click",()=>{

googleBtn.innerHTML="Connecting...";

setTimeout(()=>{

alert("Google Authentication Successful!");

window.location.href="dashboard.html";

},1500);

});

}

// ===========================================
// FORGOT PASSWORD
// ===========================================

const forgot=document.querySelector("#forgotPassword");

if(forgot){

forgot.addEventListener("click",(e)=>{

e.preventDefault();

const mail=prompt("Enter your registered Email");

if(mail){

alert("Password reset link sent to\n"+mail);

}

});

}

// ===========================================
// INPUT ANIMATION
// ===========================================

const inputs=document.querySelectorAll("input");

inputs.forEach(input=>{

input.addEventListener("focus",()=>{

input.parentElement.classList.add("active");

});

input.addEventListener("blur",()=>{

input.parentElement.classList.remove("active");

});

});

// ===========================================
// LOGIN CARD ANIMATION
// ===========================================

const card=document.querySelector(".login-card");

if(card){

card.style.opacity="0";

card.style.transform="translateY(40px)";

window.addEventListener("load",()=>{

setTimeout(()=>{

card.style.transition=".8s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},300);

});

}

// ===========================================
// RANDOM QUOTES
// ===========================================

const quotes=[

"Your dream job starts with one click 🚀",

"Optimize your resume. Unlock opportunities.",

"Every application is one step closer to success.",

"AI is here to accelerate your career.",

"Welcome to your Career Copilot."

];

const quote=document.querySelector("#loginQuote");

if(quote){

const random=Math.floor(Math.random()*quotes.length);

quote.innerHTML=quotes[random];

}
