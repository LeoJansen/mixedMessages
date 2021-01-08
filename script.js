const Buddha = require('./buddha');
const DalaiLama = require ('./dalaiLama');
const Shantideva = require('./shantideva');

const num1 = Math.floor((Math.random() * Buddha.quotes.length));
const num2 = Math.floor((Math.random() * DalaiLama.quotes.length));
const num3 = Math.floor((Math.random() * Shantideva.quotes.length));

console.log(' ');
console.log(' ');
console.log('Hi, these are your phrases today. I hope you enjoy them! :)')
console.log(' ');
console.log('"' + Buddha.quotes[num1] + '"' + '  ' + 'Buddha');
console.log(' ');
console.log('"' + DalaiLama.quotes[num2] + '"' + '  ' + 'Dalai Lama');
console.log(' ');
console.log('"' + Shantideva.quotes[num3] + '"' + '  ' + 'Shantideva');
console.log(' ');
console.log(' ');

