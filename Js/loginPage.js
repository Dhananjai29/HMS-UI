var eMail = document.querySelector("#email");
var mobileNo = document.querySelector("#mobileNumber");
var address = document.querySelector("#address");
var registerBtn = document.querySelector(".registerBtn");
var frontcard = document.querySelector(".front");
var backCard = document.querySelector(".back");
var loginCard = document.querySelector(".login");
const customerId = document.querySelector("#customerId");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPassword");
const inputElement = document.getElementById('fullName');
const submitBtn = document.querySelector("#submitBtn");
const loginBtn = document.querySelector("#loginBtn");

document.addEventListener('DOMContentLoaded', function() {

    loginBtn.addEventListener('click', function() {
        loginCard.classList.add("loginFlip");
        loginCard.classList.remove("loginTrans");
        frontcard.classList.remove("frontTrans");
        frontcard.classList.add("frontFlip");
    })

    registerBtn.addEventListener('click', function() {

        if (inputElement.value != "" && eMail.value != "" && mobileNo.value != "" && address.value != "" && mobileNo.value.length == 10) {
            document.getElementById('welcomeName').innerText = "Welcome "+ inputElement.value;
            frontcard.classList.remove("frontTrans");
            frontcard.classList.add("frontFlip");
            backCard.classList.remove("backTrans");
            backCard.classList.add("backFlip");

            const customer = {
                name : inputElement.value,
            }
            
            localStorage.setItem('customer', JSON.stringify(customer));
        } 
        else {
            alert("Enter full details")
        }
    });
  });


submitBtn.addEventListener("click", () =>{
    if(password.value != confirmPass.value || customerId.value == ""){
        if(password.value != confirmPass.value){
            alert("Password do not matched");
            return;
        }
        else if(customerId.value == ""){
            alert("Enter Customer Id");
            return;
        }
    }
    else{
        if(password.value == "" || confirmPass.value == ""){
            alert("Enter Password")
        }
        else{
            checkPassword();
        }
    }
})


function checkPassword() {
    var uppercasePattern = /[A-Z]/;
    var lowercasePattern = /[a-z]/;
    var specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (!uppercasePattern.test(password) || !lowercasePattern.test(password) || !specialCharPattern.test(password)) {
        // 
        // console.log(password.value);
        // console.log(confirmPass.value);
         window.location.replace("./index.html");
        // console.log("Password:", password.value);
        // console.log("Uppercase Test:", uppercasePattern.test(password.value));
        // console.log("Lowercase Test:", lowercasePattern.test(password.value));
        // console.log("Special Character Test:", specialCharPattern.test(password.value));
        // console.log("if condition");
    } else {
        alert("Password must contain at least one uppercase letter, one lowercase letter, and one special character.");
        console.log(customerId.value);
    }
};