document
  .getElementById("amount_bitcoin_dollar")
  .addEventListener("input", function () {
    a = document.getElementById("amount_bitcoin_dollar").value;
    b = (a / 42456.645).toFixed(5);
    document.getElementById("converted1").innerHTML = b;
  });
document
  .getElementById("amount_ethereum_dollar")
  .addEventListener("input", function () {
    a = document.getElementById("amount_ethereum_dollar").value;
    b = (a / 2272.72727273).toFixed(5);
    document.getElementById("converted2").innerHTML = b;
  });
document
  .getElementById("amount_tether_dollar")
  .addEventListener("input", function () {
    a = document.getElementById("amount_tether_dollar").value;
    b = (a / 1.000085).toFixed(5);
    document.getElementById("converted3").innerHTML = b;
  });
document
  .getElementById("amount_solana_dollar")
  .addEventListener("input", function () {
    a = document.getElementById("amount_solana_dollar").value;
    b = (a / 119.047619048).toFixed(5);
    document.getElementById("converted4").innerHTML = b;
  });
