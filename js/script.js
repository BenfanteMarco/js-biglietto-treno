let distance = prompt('Quanto dista la destinazione?'); //km

let eta = prompt('Quanti anni hai?'); //under18 o over65 sconto

let finalPrice;
let price = 0.21 * km;

if(eta < 18){
    finalprice = (price * 0.8).toFixed(2);
}
else if (eta > 65){
    finalprice = (price * 0.6).toFixed(2);
}
else{
    finalprice = price.toFixed(2);
}

console.log(price);

document.getElementById('ticket').innerHTML = finalprice + "€";