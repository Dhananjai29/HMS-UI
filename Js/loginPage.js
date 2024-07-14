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

        if (inputElement.value != "" && eMail.value != "" && mobileNo.value != "" && address.value != "") {
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
    if(password.value != confirmPass.value){
        alert("Password does not match");
    }
    else{
        window.location.replace("./index.html");
    }
})

// document.querySelector('.welcomeName').textContent = firstName;