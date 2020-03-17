// Personal API Key for OpenWeatherMap API
let apiKey = '373161157a0c9e297334f502c0cfadcd';

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('error', error);
        // appropriately handle error
    }
};

/* Function to GET Project Data */
const retrieveData = async (url = '') => {
    const request = await fetch(url);
    try {
        // into JSON
        const allData = await request.json()
    } catch (error) {
        console.log('error', error);
        // appropriately handle error
    }
}
