// async returns an object
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    if (resolve) {
      setTimeout(() => resolve('Async!!'), 0);
    } else {
      reject(new Error('Error!'));
    }
  });
};

// La palabra async antes de la función, hace que
//la función devuelva una promesa.
const anotherFunc = async () => {
  // La palabra await se utiliza dentro de las funciones async,
  //lo que hace que el programa espere hasta que la variable(promesa)
  //se resuelva para continuar.
  const something = await fnAsync();
  console.log(something);
  console.log('hello');
};

console.log('before');
anotherFunc();
console.log('after');

// The await will wait for fnAsync to finish
//AND THEN it will go for whats inside of the func
