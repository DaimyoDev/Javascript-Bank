const username = document.querySelector(".username");
const password = document.querySelector(".password");
const button = document.querySelector(".submit-button");
const formContainer = document.querySelector(".form-container");
const welcome = document.querySelector(".welcome");
const accountInfo = document.querySelector(".account-info");
const depositButton = document.querySelector(".deposit");
const withdrawButton = document.querySelector(".withdraw");
const transactions = document.querySelector(".transactions");
const accountBalance = document.querySelector(".account-balance");
let accountMoney = Math.trunc(Math.random() * 5000);
accountBalance.textContent = `$${accountMoney}`;
button.addEventListener("click", (e) => {
  const accountName = username.value;
  const passwordName = password.value;
  e.preventDefault();
  if (username.value.length > 0 && password.value.length > 0) {
    formContainer.style.opacity = 0;
    setTimeout(() => {
      formContainer.classList.add("hide");
      accountInfo.classList.remove("hide");
    }, 1000);
  } else if (username.value.length > 0) {
    alert("Please enter a password");
  } else if (password.value.length > 0) {
    alert("Please enter a username");
  }
  welcome.textContent = `Welcome ${accountName}!`;
});

depositButton.addEventListener("click", () => {
  const deposit = "Deposit";
  transactionManager(deposit);
});
withdrawButton.addEventListener("click", () => {
  const withdraw = "Withdraw";
  transactionManager(withdraw);
});

function transactionManager(transactionType) {
  let money = Math.trunc(Math.random() * 500);
  const transaction = document.createElement("div");
  transaction.classList.add("transaction");
  transaction.innerHTML = `<p class="transaction-type">${transactionType}</p>
      <p class="transaction-amount">$${money}</p>`;
  transactions.appendChild(transaction);
  if (transactionType == "Withdraw") {
    accountMoney -= money;
    accountBalance.textContent = `$${accountMoney}`;
  } else {
    accountMoney += money;
    accountBalance.textContent = `$${accountMoney}`;
  }
}
