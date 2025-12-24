const formEl = document.getElementById("feedback");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const messageEl = document.getElementById("message");

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nameEl.value.trim() === ""){
        alert("Name required");
        return;
    }

    if(emailEl.value.trim() === ""){
        alert("Email required");
        return;
    }

    if(!emailEl.value.includes("@")){
        alert("Enter a valid email");
        return;
    }

    if(messageEl.value.trim() === ""){
        alert("Write a message");
        return;
    }

    alert("Message sent successfully!");
    formEl.reset();
});
