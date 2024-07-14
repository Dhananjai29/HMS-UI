const customer = JSON.parse(localStorage.getItem('customer'));

document.querySelector("#customerName").innerHTML = "Welcome "+ customer.name;