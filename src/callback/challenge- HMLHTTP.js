//working with API and XMLHTTPRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

// function to receive the data from API
// receives URL and callback
function fetchData(urlApi, callback) {
  //new instance of the req
  let xhttp = new XMLHttpRequest();

  //open a collection to our API, type of req, then url, and true to nest
  xhttp.open('GET', urlApi, true);
  // hears states of the req, and tells us when the data is ready
  xhttp.onreadystatechange = function (event) {
    // 0- not initialized, 1- loading , 2- executed,
    //3- processing  // 4- completed
    if (xhttp.readyState === 4) {
      //If the req is correct
      if (xhttp.status === 200) {
        // Transformation of the information, we recieve text and we want an object
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error', +urlApi);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

//calling the function nested
// Not a best practice--- nested invocations
fetchData(`${API}/products`, function (err1, data1) {
  if (err1) return console.error('Error! Something happened', err1);
  fetchData(`${API}/products/${data1[0].id}`, function (err2, data2) {
    if (err2) return console.error('Error! Something happened', err2);
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (err3, data3) {
        if (err3) return console.error('Error! Something happened', err3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});
