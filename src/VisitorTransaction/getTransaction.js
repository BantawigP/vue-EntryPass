// Function to fetch appointments data from API based on email
export async function fetchAppointments(email) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/VisitorInfo/{visitor_email}?email=${email}`);
  
      // Check if the response is not successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      // Parse the response body as JSON
      const data = await response.json();
  
      // Map the fetched data to extract and transform appointment information
      const appointments = data.map(appointment => ({
        date: appointment.date_of_visit,
        time: appointment.time_of_visit,
        office: appointment.office_name,
        purpose: appointment.purpose
      }));
  
      return appointments; // Return the array of transformed appointment data
    } catch (error) {
      console.error('Error fetching appointments:', error);
      return []; // Return an empty array in case of an error
    }
  }