/*Nome*/
const nameUtent = prompt('Qual è il tuo nome?');
console.log('nameUtent');
console.log(typeof 'nameUtent');

/*Cognome*/
const surnameUtent = prompt('Qual è il tuo cognome?');
console.log('surnameUtent');
console.log(typeof 'surnameUtent');

/*Colore Preferito*/
const preferColor = prompt('Qual è il tuo colore preferito?');
console.log('preferColor');
console.log(typeof 'preferColor');

/*Password Value*/
const Password = nameUtent + surnameUtent + preferColor;
console.log('Password');
console.log(typeof 'Password')

/*Mostrare risultato schermo*/
document.getElementById('password') .innerHTML = "La tua password è " + Password