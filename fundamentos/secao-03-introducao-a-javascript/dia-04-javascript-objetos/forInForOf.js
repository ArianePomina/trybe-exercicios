let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let pessoa in names) {
    console.log('Olá ,' + names[pessoa]);
    
}


let car = {
    model: 'A3 Sedan',
    manuFacturer: 'Audi',
    year: 2020,
};

for (let tipoCarro in car) {
    console.log(tipoCarro + ': ' + car[tipoCarro]);
}
