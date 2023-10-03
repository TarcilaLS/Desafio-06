// alert('Olá, Mundo!');

// var nome = prompt('Digite seu nome.');
// alert('Seja bem-vinda, ' + nome + '!');

// var n1 = parseInt(prompt('Digite o primeiro número:')); parseInt para números inteiros
// var n2 = parseInt(prompt('Digite o segundo número:'));  parseFloat para números decimais
                                                           
// var n1 = parseFloat(prompt('Digite o primeiro número:')); 
// var n2 = parseFloat(prompt('Digite o segundo número:'));

// var n1 = parseFloat(prompt('Digite a primeira nota:')); 
// var n2 = parseFloat(prompt('Digite a primeira nota:'));
// var media = (n1+n2)/2;

// alert('A media é: ' + media);

// if(media >=7){
//     alert('Aprovada!')
// }else{
//     alert('Reprovada!');
// }

// var n = parseInt(prompt('Digite um número:'));

// if(n >= 0 && n <= 10){
//     alert('O número está dentro do intervalo de 0 a 10');
// }else{
//     alert('O número não está dentro do intervalo de 0 a 10');
// }

var numero = parseInt(prompt("Digite um número inteiro:"));

if (numero % 2 === 0 && numero > 0 && numero < 100) {
  alert("O número atende aos critérios.");
} else {
  alert("O número não atende aos critérios.");
}
