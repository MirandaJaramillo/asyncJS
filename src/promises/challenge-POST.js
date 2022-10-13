import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    //Transform the data into strings obj -> string
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: 'This is a New Product',
  price: 40494,
  description: 'This is a new description',
  categoryId: 1,
  images: ['https://placeimg.com/640/480/any'],
};

postData(`${API}/products`, data)
  .then((res) => res.json())
  .then((data) => console.log(data));
