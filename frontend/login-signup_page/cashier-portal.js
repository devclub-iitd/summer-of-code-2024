
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');
    if (logoutButton) { 
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('authToken');
            window.location.href = 'task1.html'; 
        });
    } else {
        console.error("Logout button not found!"); 
    }
});