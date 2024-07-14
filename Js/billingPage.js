const user = JSON.parse(localStorage.getItem('user'));
const date1 = new Date(user.checkIn);
const date2 = new Date(user.checkOut);

function getTotalDays() {
    const differenceInMilliseconds = date2 - date1;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const differenceInDays = differenceInMilliseconds / millisecondsPerDay;
    return differenceInDays;
}

function todaysDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    return today;
}

const roomAmount = getTotalDays() * 1500;
const roomSerChar = getTotalDays() * 500;
const subTotal = roomAmount + roomSerChar;
const gst = (subTotal*12)/100;
const vat = (subTotal*7)/100;
const grandTotal = subTotal + gst + vat + 2000;

document.querySelector("#todaysDate").innerHTML = "Date: "+ todaysDate();
document.querySelector("#name").innerHTML = user.fullName;
document.querySelector("#room").innerHTML = "Room: " +user.roomNo;
document.querySelector("#roomNoBill").innerHTML = "Room: " +user.roomNo;
document.querySelector("#checkIn").innerHTML ="Arrival date: " +user.checkIn;
document.querySelector("#checkOut").innerHTML ="Departure Date: " +user.checkOut;
document.querySelector("#totalDays").innerHTML = getTotalDays() + " Nights"
document.querySelector("#roomAmount").innerHTML = roomAmount;
document.querySelector("#roomSerCha").innerHTML = roomSerChar;
document.querySelector("#subTotal").innerHTML = subTotal;
document.querySelector("#gst").innerHTML = gst;
document.querySelector("#vat").innerHTML = vat;
document.querySelector("#grandTotal").innerHTML = grandTotal;



