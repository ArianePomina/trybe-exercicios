function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()


  let pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa = {
    nome: 'Luna',
    idade: 19
  }
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hambúrguer';
  console.log(favoriteFood);

  const nome = 'Adriana';
  const lastName = 'Soares';
  console.log(`Olá, ${nome} ${lastName}!`);
  //console.log('Olá' + ',' + nome + ' ' + lastName + '!');

  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de ${a} + ${b} é ${a + b}`);
  //console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));

    const numeroAleatorio = () => {
    return Math.random()
  }
  console.log(numeroAleatorio());