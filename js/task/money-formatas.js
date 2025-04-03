// 3 --> 3.00 Eur
//3.99 -> 3.99 Eur

function moneyFormat(money) {
    const strMoney=''+ money
    const money = strMoney.indexOf('.')
    return money.toFixed(2)+ ' Eur';
}

console.log(moneyFormat(3));
console.log(moneyFormat(3.1));
console.log(moneyFormat(3.5));
console.log(moneyFormat(3.99));