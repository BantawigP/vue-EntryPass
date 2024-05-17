import axios from 'axios';

// Function to initialize user data based on the provided email
export async function initializeUserData(email) {
  try {
    // Construct the API URL using the provided email
    const apiUrl = `http://127.0.0.1:8000/api/userEmail/${email}`;

    // Make GET request to the backend API endpoint
    const response = await axios.get(apiUrl);

    // Check if the response contains the firstname and lastname
    if (response && response.data && response.data.firstname && response.data.lastname) {
      // Extract firstname and lastname from the response data
      const { firstname, lastname } = response.data;

      // Return an object with the retrieved firstname and lastname
      return {
        firstname,
        lastname
      };
    } else {
      // If response data is incomplete or missing required fields, return placeholders
      return {
        firstname: 'PLACE',
        lastname: 'HOLDER'
      };
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    // If there's an error fetching data, return placeholders
    return {
      firstname: 'PLACE',
      lastname: 'HOLDER'
    };
  }
}