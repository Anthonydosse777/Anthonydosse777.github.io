window.alert("Welcome to my store!");

let userName = window.prompt("Please enter your name", "Anthony");
let greeting;

let time = new Date();

if (time.getHours() < 12) {
  greeting = window.alert(`Good Morning ${userName}!`);
} else if (time.getHours() < 18) {
  greeting = window.alert(`Good Afternoon ${userName}!`);
} else {
  greeting = window.alert(`Good Evening ${userName}!`);
}

let item = window.prompt("Please enter which Item you want", "Apples");
let quantity = window.prompt("Please enter the quantity you want", "5");

let currentDate = new Date();
currentDate.setDate(currentDate.getDate());

let arrivalDate = new Date();
arrivalDate.setDate(arrivalDate.getDate() + 7);

document.getElementById(
  "message"
).innerText = `${userName}, thank you for your order of ${quantity} ${item} on ${currentDate}.`;

document.getElementById("orderDetails").innerHTML = `
    <strong>Order Details:</strong><br>
    Item Requested: ${item}<br>
    Number of Items: ${quantity}<br>
    Expected Arrival Date: ${arrivalDate.toDateString()}`; 