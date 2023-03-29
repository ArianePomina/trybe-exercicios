// simular um jogo com dois dados de seis lados. o objetivo é rolar o segundo dado até que o número sorteado seja igual ao numero aleatório entre 01 e 06.

let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1: ', dado1);

let dado2 = Math.ceil(Math.random() * 6)

while (dado1 !== dado2) {
    dado2 = Math.ceil(Math.random() * 6);
    console.log('resultado dado 2: ', dado2);
}