// task 1
// Modify the awaitCall function to handle errors gracefully
async function awaitCall() {
    try {
        // Simulate an API call (success or failure)
        const fakeApiResponse = new Promise((resolve, reject) => {
            setTimeout(() => reject("Failed to fetch data from API"), 2000); // Simulate failure
        });

        // Await the response from the API
        const data = await fakeApiResponse;
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Error occurred:", error); // Handle errors gracefully
        console.log("Something went wrong. Please try again later.");
    }
}

// Example usage
awaitCall();
// task 2
// Define three async functions that log messages after a delay
async function functionOne() {
    await delay(1000);
    console.log("Function 1 completed");
}

async function functionTwo() {
    await delay(1000);
    console.log("Function 2 completed");
}

async function functionThree() {
    await delay(1000);
    console.log("Function 3 completed");
}

// Function to chain these functions sequentially
async function chainedAsyncFunctions() {
    await functionOne();
    await functionTwo();
    await functionThree();
}

// Example usage
chainedAsyncFunctions();
// task 3
// Create an async function to make two API calls concurrently using Promise.all()
async function concurrentRequests() {
    const fakeApiCallOne = new Promise((resolve) => {
        setTimeout(() => resolve("Response from API 1"), 2000);
    });

    const fakeApiCallTwo = new Promise((resolve) => {
        setTimeout(() => resolve("Response from API 2"), 3000);
    });

    // Use Promise.all to wait for both requests to resolve concurrently
    const [resultOne, resultTwo] = await Promise.all([fakeApiCallOne, fakeApiCallTwo]);
    console.log("Combined results:", resultOne, resultTwo);
}

// Example usage
concurrentRequests();

