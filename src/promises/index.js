// Something that will happen
////////////////////Promise is the promise constructor
const promise = new Promise(function (resolve, reject) {
  resolve('hello!');
});
//resolve  -> when the promise returns the correct val
//reject -> when the promise doesnt work

const cows = 9;
const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows 🐄  MOOOOO`);
  } else {
    reject('Not enough cows unux');
  }
});

//with .then you get the result of the promise according to resolve or reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log('Finished'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
//En este desafío debes crear una función la
//cual produzca una espera en un tiempo específico
// y debe funcionar como una promesa.

/// export function delay(time, message) {
// Tu código aquí 👈
return new Promise(function (resolve, reject) {
  if (time >= 0) {
    window.setTimeout(() => {
      resolve(message);
    }, time);
  } else {
    reject('Time cannot be negative 🕰 ');
  }
});
