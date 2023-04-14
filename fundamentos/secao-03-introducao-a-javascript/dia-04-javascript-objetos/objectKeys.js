let student = {
    name: 'Ariane',
    email: 'arianepomina@gmail.com',
    telefone: '41988638733',
    gitHUb: 'ArianePomina',
    linkedIn: 'https://www.linkedin.com/in/arianepomina-html-css-javascript/'
  };

function listDeContato (student) {
    let arrayDeContato = Object.keys(student);
    for (let index in arrayDeContato) {
        console.log(arrayDeContato[index] + ', tipo de contato: ' + student[arrayDeContato[index]]);
    }
};

console.log('estudante');
listDeContato(student);


let band = {
    name: 'Blind Guardian',
    formedIn: 1986,
    lastAlbum: 'Beyond the Red Mirror',
  };
  
  let info = {
    genre: 'Power Metal',
    lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
  };

  console.log(Object.assign(band, info));