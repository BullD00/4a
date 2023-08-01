{
    const formElement = document.querySelector(".js-form");
const currencyElement = document.querySelector(".js-currency");
const rateElement = document.querySelector(".js-rate");
const amountElement = document.querySelector(".js-amount");
const resultElement = document.querySelector(".js-result");

const euroCurrency = 4.45;
const dollarCurrency = 3.96;
const poundCurrency = 5.17;

currencyElement.addEventListener("input", (event) => {
const currency = currencyElement.value;
 
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

const amount = amountElement.value;
const rate = rateElement.value; 
let result = amount * rate 

resultElement.innerText = result.toFixed(2);
});

}