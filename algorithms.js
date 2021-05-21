 //TASK ONE :)
  function celsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
} 

function fahrenheitToCelsius(fahrenheit) {
 return (fahrenheit - 32) * 5/9;
 
}
document.getElementById("h1").innerHTML= ("ConvertFahrToCelsius(0) should return " + "= " + fahrenheitToCelsius(0).toFixed(4));




//TASK TWO :))
function checkYuGiOh(n){
let sum = [1];

for (var i = 1; i <= n; i++) {
if (i % 2  === 0){
  return ("Yu");
} else if( i % 3  === 0){
  return ("Gi");
} else if (i % 5  === 0) {
  return ("Oh");
} else if (i % 2  === 0 && i % 3  === 0) {
  return ("Yu-Gi");
} else if (i % 2  === 0 && i % 5  === 0) {
  return ("Yu-Oh");
} else if (i % 2  === 0 && i % 3  === 0 && i % 5  === 0) {
  return ("Yu-Gi-Oh");
}{
  sum += i;
}
}
return sum;
}
document.getElementById("h2").innerHTML= ("checkYuGiOh(4) " + "= " + checkYuGiOh(4));