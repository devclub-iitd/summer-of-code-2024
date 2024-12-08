document.addEventListener('DOMContentLoaded', () => {
    const userName = "JohnDoe"; // Example username, replace this with actual logic to retrieve the username
    const userNameElement = document.querySelector('.username');
    if (userNameElement) {
        userNameElement.innerText = userName;
    }
});

fetch('API_URL')
    .then(response => response.json())
    .then(data => {
        const ordersContainer = document.querySelector('.row');
        data.orders.forEach(order => {
            // Assuming `data.orders` is an array of order objects
            const card = document.createElement('div');
            card.className = 'col-md-4 mt-3';
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Order ID: ${order.id}</h5>
                        <p class="card-text">Date: ${order.date}</p>
                        <p class="card-text">Total: $${order.total}</p>
                        <!-- Additional order details -->
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `;
            ordersContainer.appendChild(card);
        })
    });


fetch('API_URL')
    .then(response => response.json())
    .then(data => {
        const stocksContainer = document.querySelector('.row');
        data.stocks.forEach(stock => {
            // Assuming `data.stocks` is an array of stock objects
            const card = document.createElement('div');
            card.className = 'col-md-4 mt-3';
            card.innerHTML = `
                <div class="card bg-warning text-white">
                    <div class="card-body">
                        <h5 class="card-title">Stock ID: ${stock.id}</h5>
                        <p class="card-text">Quantity Needed: ${stock.quantityNeeded}</p>
                        <p class="card-text">Last Ordered: ${stock.lastOrdered}</p>
                        <!-- Additional stock details -->
                        <a href="#" class="btn btn-primary">Order Now</a>
                    </div>
                </div>
            `;
            stocksContainer.appendChild(card);
        })
    });

document.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    
    dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                const stockId = this.getAttribute('data-stock-id'); // Get the stock ID from the clicked item
                console.log(`Selected Stock ID: ${stockId}`);
                // Example: Redirect to a detailed view for the selected stock
                window.location.href = `/stock/details?id=${stockId}`; // Adjust the URL path as necessary
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to update the time clock
    function updateTimeClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('time-clock').innerText = timeString;

        // Call updateTimeClock again after 1 second (1000 milliseconds)
        setTimeout(updateTimeClock, 1000);
    }

    // Start the ticking time clock
    updateTimeClock();
});