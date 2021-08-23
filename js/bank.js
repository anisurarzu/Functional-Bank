function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmount = parseFloat(inputField.value);
  inputField.value = "";
  return inputAmount;
}
function updateCurrentBalance(currentBalanceId, newAmount) {
  //   debugger;
  const presentAmountText = document.getElementById(currentBalanceId);
  const presentDeposit = parseFloat(presentAmountText.innerText);
  presentAmountText.innerText = presentDeposit + newAmount;
}
function getCurrentBalance() {
  const presentBalanceAmount = document.getElementById("balance-total");
  const presentBalance = parseFloat(presentBalanceAmount.innerText);
  return presentBalance;
}
function updateBalance(amount, isAdd) {
  const presentBalanceAmount = document.getElementById("balance-total");
  //   const presentBalance = parseFloat(presentBalanceAmount.innerText);
  const presentBalance = getCurrentBalance();
  if (isAdd == true) {
    presentBalanceAmount.innerText = presentBalance + amount;
  } else {
    presentBalanceAmount.innerText = presentBalance - amount;
  }
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get new deposit amount
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      // get current deposit and update
      updateCurrentBalance("deposit-total", depositAmount);
      //update main balance
      updateBalance(depositAmount, true);
    } else {
      alert(" You should give positive number for deposit");
    }
  });
// withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // get new withdraw
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      // get current withdraw amount and update
      updateCurrentBalance("withdraw-total", withdrawAmount);
      // withdraw from main balance and update
      updateBalance(withdrawAmount, false);
    } else {
      alert(
        "you can not withdraw more than what you have in your account and you should give positive number for withdraw"
      );
    }
  });
