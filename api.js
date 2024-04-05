import axios from 'axios';

export const dataForLikes = async () => {
  try {
    const response = await axios.get('https://main--zingy-fairy-526c63.netlify.app/getData');
    return response.data; // Changed to return response.data
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const savingLikedData = function saveDataToMongoDB(data) {
  console.log(data);
  fetch('https://main--zingy-fairy-526c63.netlify.app/saveData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }), // Modified to send data directly
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
