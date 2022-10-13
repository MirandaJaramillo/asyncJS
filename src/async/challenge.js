import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  //promise
  const response = await fetch(urlApi);
  //object (jsonify)
  const data = await response.json();
  return data;
}

const anotherFunc = async (urlApi) => {
  try {
    // saving the promise in variable
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );
    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.log(error);
  }
};

anotherFunc(API);

////////////////////////////
export async function runCode(url) {
  try {
    new URL(url);
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    if (error.message === "Failed to construct 'URL': Invalid URL") {
      throw new Error('Invalid URL');
    } else {
      throw new Error('Something was wrong');
    }
  }
}
