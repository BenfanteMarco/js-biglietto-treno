let distance = prompt('Quanto dista la destinazione?'); //km
console.log(distance);

let eta = prompt('Quanti anni hai?'); //under18 o over65 sconto
console.log(eta);

let price = 0.21 //km

let priceJ = price * distance;
console.log(priceJ);

let under18 = priceJ * 20 / 100;
console.log(under18);

let over65 = priceJ * 40 / 100;
console.log(over65);

let finalPrice;
console.log(finalPrice);

if(eta <= 18){
    finalprice = priceJ - under18
}
else if (eta >= 65){
    finalprice = priceJ - over65
}
else{
    finalprice = priceJ
}

document.getElementById('ticket').innerHTML = finalprice.toFixed(2) + "€";