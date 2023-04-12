let student = {
    name : 'Ariane'
};

let newKey = 'email';
let email = 'arianepomina@gmail.com';

function addProperty (object, key, value) {
    object[key] = value;
};

addProperty(student, newKey, email);

student.telefone = '41988638733';
student.gitHUb = 'ArianePomina';
student.linkedIn = 'https://www.linkedin.com/in/arianepomina-html-css-javascript/'

console.log(student);

for (let key in student) {
    console.log(key);
}