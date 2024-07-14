// document.addEventListener("DOMContentLoaded", function() {
//     const billDetails = {
//         roomCharges: 200,
//         additionalServices: 50,
//         total: 250
//     };

//     const billDetailsDiv = document.getElementById("bill-details");
//     billDetailsDiv.innerHTML = `
//         <p>Room Charges: $${billDetails.roomCharges}</p>
//         <p>Additional Services: $${billDetails.additionalServices}</p>
//         <h3>Total: $${billDetails.total}</h3>
//     `;

//     document.getElementById("checkout-button").addEventListener("click", function() {
//         window.location.href = "payment.html";
//     });
// });

// Retrieve user data from local storage
const user = JSON.parse(localStorage.getItem('user'));



if (user) {
    document.querySelector("#fullName").innerHTML = "Name: " + user.fullName;
    document.querySelector("#checkIn").innerHTML ="Check In: "+ user.checkIn;
    document.querySelector("#checkOut").innerHTML = " Check Out: " + user.checkOut;
    document.querySelector("#roomType").innerHTML ="Room Type: "+ user.roomType;
    document.querySelector("#contact").innerHTML ="Contact: " +user.contact;
    document.querySelector("#roomNo").innerHTML ="Room No: " + user.roomNo;
    document.querySelector("#bookingId").innerHTML ="Booking Id: " +  user.bookingId;
}
else {
    const userDetailsDiv = document.getElementById('userDetails');
    userDetailsDiv.innerHTML = '<p>No user data found.</p>';
}
