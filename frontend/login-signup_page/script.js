const container = document.querySelector('.container');
const loginlink = document.querySelector('.login-link');
const registrationlink = document.querySelector('.registration-link');
const btnpopup = document.querySelector('.btnlogin');
const iconclose = document.querySelector('.close-icon');
const loginForm = document.querySelector('.login');



registrationlink.addEventListener('click', () => {
    container.classList.add('active');
});

loginlink.addEventListener('click', () => {
    container.classList.remove('active');
});

btnpopup.addEventListener('click', () => {
    container.classList.add('active-popup');
});

iconclose.addEventListener('click', () => {
    container.classList.remove('active-popup');
});

document.getElementById("mycheck").required = true;

async function authenticateUser(username, password) {
    const requestBody = JSON.stringify({ username, password });
    const API_ENDPOINT = 'https://dsoc-2024.webredirect.org/api/login/';
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: requestBody
        });
        console.log(response);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data.message === 'Login Successful') {
            console.log('Authentication successful!', data);
            localStorage.setItem('authToken', data.token); // Store the token for future API calls
            // console.log(data.token);
            return data; // Return the data to indicate success
        } else {
            throw new Error('Authentication failed according to server response.'); // Throw an error if not successful
        }

    } catch (error) {
        console.error('Error during authentication:', error);
        throw error;
        // if (error.response && error.response.status === 401) {
        //     displayErrorMessage('Invalid username or password.');
        // } else {
        //     displayErrorMessage('An unexpected error occurred. Please try again later.');
        // }
    };
};

function displaySuccessMessage(message) {
    const successElement = document.createElement('div');
    successElement.textContent = message;
    successElement.className = 'success-message';
    document.body.appendChild(successElement);

    setTimeout(() => {
        document.body.removeChild(successElement);
    }, 4000); // Automatically remove the message after 4 seconds
}

function displayErrorMessage(message) {
    const errorElement = document.createElement('div');
    errorElement.textContent = message;
    errorElement.className = 'error-message';
    document.body.appendChild(errorElement);

    setTimeout(() => {
        document.body.removeChild(errorElement);
    }, 4000); // Automatically remove the message after 4 seconds
}

document.querySelector('.login').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username-log').value;
    const password = document.getElementById('password-log').value;

    try {
        const data = await authenticateUser(username, password);
        if (data.designation === 'admin') {
            window.location.href = 'admin-portal.html';
        } else if (data.designation === 'cashier') { // Ensure 'designation' exists in the response
            window.location.href = 'cashier-portal.html';
        } else {
            throw new Error('No designation provided in response.'); // Handle unexpected response structure
        }

    } catch (error) { 
        displayErrorMessage(error.message || 'Authentication failed. Please check your credentials.');
    }
});

// const authToken = localStorage.getItem('authToken');
// fetch('protected-endpoint', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${authToken}`
//     }
// })
// .then(response => response.json())
// .catch(error => console.error('Protected request failed:', error));

document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('username');
    if (userName) {
        console.log(`Welcome, ${userName}!`);
    } else {
        console.log(`Please log-in`);
    }
});

