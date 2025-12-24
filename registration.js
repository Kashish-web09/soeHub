const regForm = document.getElementById("registerForm");
const firstNameEl = document.getElementById("fname");
const lastNameEl = document.getElementById("lname");
const emailEl = document.getElementById("email");
const usernameEl = document.getElementById("reg-username");
const passwordEl = document.getElementById("reg-password");
const conPassEl = document.getElementById("confirm-password");

const fnameErr = document.getElementById("fnameError");
const lnameErr = document.getElementById("lnameError");
const usernameError = document.getElementById("userError");
const emailErr = document.getElementById("emailError");
const passErr = document.getElementById("passError");


regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (firstNameEl.value.trim() === "") {
        fnameErr.textContent = "First name required";
        fnameErr.style.color = "red";
        isValid = false;
    }

    if (lastNameEl.value.trim() === "") {
        lnameErr.textContent = "Last name required";
        lnameErr.style.color = "red";
        isValid = false;
    }

    if (emailEl.value.trim() === "") {
        emailErr.textContent = "Email required";
        emailErr.style.color = "red";
        isValid = false;
    }

    if (usernameEl.value.length < 6) {
        usernameError.textContent = "Username must be at least 6 characters!";
        usernameError.style.color = "red";
        isValid = false;
    }

    if (passwordEl.value.length < 8) {
        passErr.textContent = "Password must be at least 8 characters";
        passErr.style.color = "red";
        isValid = false;
    } else if (passwordEl.value !== conPassEl.value) {
        passErr.textContent = "Passwords do not match!";
        passErr.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        alert("Registration done ✅");
        regForm.reset();
    }
});
