let num1 = Number (prompt('Por gentileza, digite um número inteiro:'))

console.log('Seu primeiro número digitado foi:' , num1)

let num2 = Number (prompt('Por gentileza, digite outro número inteiro:'))

console.log('Seu segundo número digitado foi:' , num2)

console.log('O primeiro numero é maior que segundo?' , num1 > num2);

console.log('O primeiro numero é igual ao segundo??' , num1 === num2);

console.log('O primeiro numero é divisível pelo segundo?' , (num1 % num2) === 0);

console.log('O segundo numero é divisível pelo primeiro?' , (num2 % num1) === 0);
