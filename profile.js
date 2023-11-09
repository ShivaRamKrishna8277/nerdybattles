document.addEventListener("DOMContentLoaded", () => {
    const inputCoins = document.getElementById("totalbCoin");
    const totalCost = document.getElementById("bCoinCost");
    inputCoins.addEventListener("input", calculateCost);
    function calculateCost() {
        const costPerCoin = 10;
        const totalCoins = parseFloat(inputCoins.value);
        const cost = (totalCoins * costPerCoin).toFixed(2);
        totalCost.value = cost; 
    }

    const subWithdraw = document.getElementById("submitWithdraw");
    const availableBalElement = document.getElementById("availableBal");
    const inputBalElement = document.getElementById("inputBal");
    const walletModal = new bootstrap.Modal("#walletModal");
    subWithdraw.addEventListener('click', () => {
        const availableBal = parseFloat(availableBalElement.textContent.replace(/[^0-9.-]+/g,""));
        const inputBal = parseFloat(inputBalElement.value);
        if (isNaN(availableBal) || isNaN(inputBal)) {
            // Handle the case where availableBal or inputBal is not a valid number
            alert("Invalid input. Please enter valid numeric values.");
        } else {
            if (inputBal > availableBal) {
                alert("You don't have enough balance to withdraw!");
            } else {
                document.getElementById("withdrawAmount").innerText = `${inputBal}`;
                walletModal.show();
            }
        }
    });
});
