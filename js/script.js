let distance = prompt('Quanto dista la destinazione?'); //km

let eta = prompt('Quanti anni hai?'); //under18 o over65 sconto

let finalPrice;
let price = 0.21 * distance;

if(eta < 18){
    finalPrice = (price * 0.8).toFixed(2);
}
else if (eta > 65){
    finalPrice = (price * 0.6).toFixed(2);
}
else{
    finalPrice = price.toFixed(2);
}

console.log(price);

document.getElementById('ticket').innerHTML = finalPrice;