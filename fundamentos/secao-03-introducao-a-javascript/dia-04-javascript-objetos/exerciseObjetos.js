let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, ' + info.personagem);

info['recorrente'] = 'Sim';

console.log (info);

for (let chave in info) {
    console.log(chave);
}

for (let chave in info) {
    console.log(info[chave]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Chrismas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O Último MacPatinhas',
    recorrente:'Sim',
};

for (let chave in info) {
    if (chave === 'recorrente' &&
    info[chave] === 'Sim' && 
    info2[chave] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[chave] + ' e ' + info2[chave]);
    }
}