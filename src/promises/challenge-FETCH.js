//using fetch npm i node-fetch
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}
/*  HAS ALL THE PRODUCTS!!!HAS ALL THE PRODUCTS!!!HAS ALL THE PRODUCTS!!!HAS ALL THE PRODUCTS!!!

fetchData(`${API}/products`)
  //transform from promise to json bc fetch its a promise
  .then((res) => res.json())
  // actually show the response
  .then((products) => {
    console.log(products);
  })
  .then(() => {
    console.log('Here I am!');
  })
  .catch((err) => console.log(err));
*/

fetchData(`${API}/products`)
  //transform from promise to json bc fetch its a promise
  .then((res) => res.json())
  // actually show the response
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((res) => res.json())
  .then((oneProduct) => {
    console.log(oneProduct.title);
    return fetchData(`${API}/categories/${oneProduct.category.id}`);
  })
  .then((res) => res.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log('Finished process'));
