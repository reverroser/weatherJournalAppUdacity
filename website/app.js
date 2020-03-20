const baseUrl = 'http://localhost:8000';
const openWeatherApiKey = '373161157a0c9e297334f502c0cfadcd';

// Function to GET Project Data
const retrieveData = async (endpoint = '') => {
  try {
    const request = await fetch(`${baseUrl}${endpoint}`);
    return request.json();
  } catch (error) {
    console.log('error', error);
  }
}

// Function to POST data
const postData = async (endpoint = '', data = {}) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      api_key: openWeatherApiKey,
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};

const render = async () => {
  const dateEl = document.getElementById('date');
  const tempEl = document.getElementById('temp');
  const contentEl = document.getElementById('content');
  const { date, temp, description } = await retrieveData('/recent');
  const newDate = new Date(date);
  dateEl.innerHTML = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
  tempEl.innerHTML = `${temp}ºF`;
  contentEl.innerHTML = description;
}

const generate = async () => {
  const zipCode = document.getElementById('zip').value;
  const description = document.getElementById('feelings').value;

  await postData('/add', {
    zipCode,
    description,
  });
}

const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', async (e) => {
  await generate();
  render();
});

