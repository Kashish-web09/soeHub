const username=document.getElementById("login-username");
const loginbtn=document.querySelector('.auth-btn');
const passEl=document.getElementById("login-password");
const errorEl=document.getElementById("userError");
const typingEl=document.getElementById("typing");
const formEl=document.getElementById("loginForm");
const passError=document.getElementById("passError");
const eyebtn=document.getElementById("toggle-password");
const eyeIcon =document.getElementById("toggle-eye");
const forgotEl=document.getElementById("forgot-pass");



formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(username.value.trim()===""){
errorEl.textContent="Username required!";
errorEl.style.color="red";
username.classList.add("error-input");
        return;
    }if(username.value.length<6){
    errorEl.textContent="Username must have atleast 6 characters";
    errorEl.style.color="red";
    
    return;
}   
    if(passEl.value.trim()===""){
        passError.textContent="Password required";
        passError.style.color="red";
        passEl.classList.add("error-input");
        return;
    }
    if(passEl.value.length<8){
    passError.textContent="Password must have atleast 8 characters";
passError.style.color="red";
return;    
    }

    alert("Login successfully!");

});
username.addEventListener('input',()=>{
    errorEl.textContent="";
    username.classList.remove("error-input");
if(username.value.length<6){
    typingEl.textContent="Typing...";
    typingEl.style.color="grey";
}else{
    typingEl.textContent="";
}
});
passEl.addEventListener('input',()=>{
    passError.textContent="";
    passEl.classList.remove("error-input");
});
eyebtn.addEventListener('click',()=>{
if(passEl.type==="password"){
    passEl.type="text";
eyeIcon.classList.remove("fa-eye");
eyeIcon.classList.add("fa-eye-slash");
}else{
    passEl.type="password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");


}


});

passEl.addEventListener('copy', e => e.preventDefault());
passEl.addEventListener('paste', e => e.preventDefault());
passEl.addEventListener('cut', e => e.preventDefault());

forgotEl.addEventListener('click',(e)=>{


    alert("If this email exists, a reset link will be sent.");
});

