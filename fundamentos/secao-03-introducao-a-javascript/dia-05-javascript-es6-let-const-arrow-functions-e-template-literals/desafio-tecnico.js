//crie uma função que ligue e desligue o motor de um carro

let on = 'ligado';
let off = 'desligado';
const onOffCar = (on) => 
on === 'ligado' 
? `Este carro está ${on}!`
: `Este carro está ${off}`;

console.log(onOffCar(on)); 


//crie uma função que calcule a área de um círculo


const raio = 7;
const pi = 3.14;
  
const areaCirculo = (raio) => {
    let area = pi * (raio ** 2);
    return typeof raio !== 'number'
    ?'A entrada deve ser um número'
    :`Esta é a área do círculo: ${area}`;
}
console.log(areaCirculo(raio));
