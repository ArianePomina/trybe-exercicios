//crie uma função que ligue e desligue o motor de um carro

let on = 'ligado';
let off = 'desligado';
const onOffCar = (on) => 
on === 'ligado' 
? `Este carro está ${on}!`
: `Este carro está ${off}`;

console.log(onOffCar(on)); 

