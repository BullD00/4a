let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let rateElement = document.querySelector(".js-rate");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let euroCurrency = 4.45;
let dollarCurrency = 3.96;
let poundCurrency = 5.17;

currencyElement.addEventListener("input", (event) => {
let currency = currencyElement.value;
 
    switch(currency) {
        case "euro":
            rateElement.value = euroCurrency;
            break;
    
        case "dollar":
            rateElement.value = dollarCurrency;
            break;
    
        case "pound":
            rateElement.value = poundCurrency;
            break;
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let amount = amountElement.value;
let rate = rateElement.value; 
let result = amount * rate 

resultElement.innerText = result.toFixed(2);
});
