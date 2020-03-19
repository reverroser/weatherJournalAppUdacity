const baseUrl = 'http://localhost:8000';

const app = document.getElementById('app');

// // Event listener to add function to existing HTML DOM element

// /* Function called by event listener */

// /* Function to GET Web API Data*/

// /* Function to POST data */
// const postData = async (url = '', data = {}) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });

//     try {
//         const newData = await response.json();
//         return newData;
//     } catch (error) {
//         console.log('error', error);
//         // appropriately handle error
//     }
// };

// /* Function to GET Project Data */
const retrieveData = async (endpoint = '') => {
  try {
    const request = await fetch(`${baseUrl}${endpoint}`);
    return request.json();
  } catch (error) {
    console.log('error', error);
  }
}

const initList = async () => {
  const data = await retrieveData('/all');
  data.forEach(element => {
    console.log(element, app);
    // For each element create a new div in the dom
  });
}

initList();