/*
● Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
the data has been received in the fetch.
*/

// Function to fetch data and resolve with a delay of 2 seconds
const fetchDataWithDelay = () => {
    return new Promise((resolve, reject) => {
        fetch('https://reqres.in/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setTimeout(() => {
                    resolve(data);
                }, 2000);
            })
            .catch(error => {
                reject('There was an error fetching the data:', error);
            });
    });
}

// Call the function and handle the result with .then()
fetchDataWithDelay()
    .then(data => {
        console.log('Received data after delay:', data);
    })
    .catch(error => {
        console.error(error);
    });
