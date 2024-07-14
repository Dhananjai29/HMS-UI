const checkIn = document.querySelector("#checkIn");
const checkOut = document.querySelector("#checkOut");
const roomType = document.querySelector("#roomType");
const fullName = document.querySelector("#fullName");
const contact = document.querySelector("#contact")
const bookingBtn = document.querySelector("#bookingBtn");

function getRandomAlphabet() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    return alphabets[randomIndex];
}

function getRoomNo() {
    const alphabets = 'ABCD';
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    return alphabets[randomIndex];
}


document.addEventListener('DOMContentLoaded', function(){

    bookingBtn.addEventListener('click', function(){
        if (checkIn.value != "" && checkOut.value != "" && roomType.value != "" && fullName.value != "" && contact.value != "" && contact.value.length == 10){
            alert("Registration Successful");

            const user = {
                fullName: document.getElementById('fullName').value,
                checkIn: document.getElementById('checkIn').value,
                checkOut: document.getElementById('checkOut').value,
                roomType: document.getElementById('roomType').value,
                contact: document.getElementById('contact').value,
                roomNo: getRoomNo() +"-"+  Math.floor(Math.random() * 10)+1,
                bookingId : getRandomAlphabet() +"-"+  Math.floor(Math.random() * 100000) + 1,
              };
            
              localStorage.setItem('user', JSON.stringify(user));
            
              window.location.href = './booking.html';
        }
        else{
            alert("Please fill all the fields");
            }
    });
});


// script.js
let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex += direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    const sliderWidth = document.querySelector('.slider').clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
}

// Auto slide every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 6000);