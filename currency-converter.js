'use strict';
const ps = require("prompt-sync");
let prompt = ps();
let currency = {
  'USD': 1.0,
  'JPY': 113.5,
  'EUR': 0.89,
  'RUB': 74.36,
  'GBP': 0.75
}
 
const usd = currency.USD;
const jpy = currency.JPY.toFixed(1);
const eur = currency.EUR.toFixed(2);
const rub = currency.RUB.toFixed(2);
const gbp = currency.GBP.toFixed(2);
 
let currFrom;
let currTo;
let amount;
let txt = '1 USD equals  ';
console.log('Welcome to Currency Converter!')
console.log(txt + `${usd} ` + Object.keys(currency)[0]);
console.log(txt + `${jpy} ` + Object.keys(currency)[1]);
console.log(txt + `${eur} ` + Object.keys(currency)[2]);
console.log(txt + `${rub} ` + Object.keys(currency)[3]);
console.log(txt + `${gbp} ` + Object.keys(currency)[4]);
//-------------------------------------------------------------------------------------------------------
 
const convertFunc = () => {
  let testRegex = /USD|usd|JPY|jpy|EUR|eur|RUB|rub|GBP|gbp/;
  
// 'currency from' validation  
  console.log('What do you want to convert? >');
  currFrom = prompt('From: > ').toUpperCase();
  while (currFrom === '') // it will check if passed string is not empty
    {
      console.log('Type currency once more please >');
      console.log('What do you want to convert? >');
      currFrom = prompt('From: > ').toUpperCase();
    }
  while (!testRegex.test(currFrom)) // it will check if passed string match the pattern we need
    {
      console.log('Unknown currency >');
      console.log('What do you want to convert? >');
      currFrom = prompt('From: > ').toUpperCase();
    }  

// 'currency to' validation
  currTo = prompt('To: > ').toUpperCase();
  while (currTo === '') // it will check if passed string is not empty
    {
      console.log('Type currency once more please >');
      console.log('What do you want to convert? >');
      currTo = prompt('To: > ').toUpperCase();
    }
  while (!testRegex.test(currTo)) // it will check if passed string match the pattern we need
    {
      console.log('Unknown currency >');
      console.log('What do you want to convert? >');
      currTo = prompt('To: > ').toUpperCase();
    }  
 
// amount validation
  amount = prompt('Amount: > ');
  while (amount < 1) // it will check if amount is bigger than 1
  {
    console.log('The amount cannot be less than 1 >');
    amount = prompt('Amount: > ');
  }
 
  let result = (parseFloat(currency[currFrom]) * parseFloat(currency[currTo]) * parseFloat(amount)).toFixed(4);
  console.log(`Result: ${amount} ${currFrom} equals ${result} ${currTo}`)
}
 
// converting or exit program loop
let convertCurr = '2';
do {
  console.log('What do you want to do? ');
  console.log('1-Convert currencies 2-Exit program');
  convertCurr = prompt('> ').toUpperCase();
  if (convertCurr === '1') {
    convertFunc();
  } else if (convertCurr === '2') {
    console.log('Have a nice day!');
    break;
  } else {
    console.log('Unknown input');
  }
} while (convertCurr !== '');