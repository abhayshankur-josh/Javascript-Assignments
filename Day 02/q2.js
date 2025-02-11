/*
● Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received
*/

// Function to fetch data from the API and log it to the console
const fetchData = () => {
    fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was an error fetching the data:', error);
        });
}

fetchData();
