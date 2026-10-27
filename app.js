const form = document.querySelector("#tip-form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const billInput = document.querySelector("#bill");
  const billAmount = Number(billInput.value);

  const tipInput = document.querySelector("#tip");
  const tipPercentage = Number(tipInput.value);

  const tipAmount = (billAmount * tipPercentage) / 100;

  const totalAmount = billAmount + tipAmount;

  result.textContent = `Tip: €${tipAmount.toFixed(2)} · Total: €${totalAmount.toFixed(2)}`;
});
