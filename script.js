function redirectToPayment(boxName, price, dateId) {
    const date = document.getElementById(dateId).value;
    if (!date) {
        alert("Please select a delivery date.");
        return;
    }
    const confirmation = confirm(`You're about to purchase the ${boxName} for $${price}. Confirm?`);
    if (confirmation) {
        window.location.href = "payment.html";
    }
}
