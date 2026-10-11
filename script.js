let nameInput = document.querySelector('input[type="text"]');
let password = document.querySelector('input[type="password"]');
let email = document.querySelector('input[type="email"]')
let number = document.querySelector('input[type="number"]')
let button = document.querySelector(".registarion-button");

button.addEventListener("click", function() {
    if (nameInput.value === "") {
        alert("Please enter your name!");
    } else if (password.value === "") {
        alert("Please enter your password")
    }else if (email.value === "") {
       alert("Please enter your email")
    }else if (number.value === "") {
        alert("Please enter your number")
    } else if (number.value < 18) {
    alert("You must be at least 18!");
    }else {
    alert("Registration successful!");
    }
});