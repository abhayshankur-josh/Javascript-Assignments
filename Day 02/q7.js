/*
● Complete the above tasks with async/await.
*/

// Async function that fetches data and resolves with a 2-second delay
const fetchDataWithDelay = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Wait for 2 seconds before resolving the data
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        return data;
    } catch (error) {
        console.error('There was an error fetching the data:', error);
    }
}

// Call the async function and handle the result
const displayData = async () => {
    const data = await fetchDataWithDelay();
    console.log('Received data after delay:', data);
}

displayData();
