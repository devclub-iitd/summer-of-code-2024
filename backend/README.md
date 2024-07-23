# DevClub Summer of Code 2024: Backend Development Track

### Why learn this?
Backend development encompasses the creation and maintenance of the server-side components that power web applications. It involves designing, developing, and managing the logic, databases, and infrastructure required to handle data processing, user authentication, business logic, and integrations. Backend developers work with programming languages like Python, Ruby, Java, or Node.js to build robust APIs, implement server-side functionalities, and ensure smooth communication between the frontend and backend. They focus on performance, security, and scalability, enabling the seamless functioning of web applications and delivering a reliable and efficient user experience.

### What we'll be building?
Hola People...!!! This time,
We will be building a Point of Sales System from scratch. For the website, we will have a frontend and a backend. The frontend will be built using React and the backend will be built using Flask (Python) as the first language. Though, those interested may also build this using JavaScript (For which we will be providing support alongwith). Also, we will be using PostGreSQL for Database...

## Point of Sales (PoS) System

The project aims to develop a sophisticated Point of Sales (PoS) system to streamline inventory management and sales processes. The system includes features for user authentication, customer management, inventory management, sales tracking, file uploading, invoice generation, and state management.

## Why Use Flask for PoS Development?

- *Scalability and Flexibility:* Flask provides the flexibility to scale the application as needed, making it ideal for building a PoS system that may evolve over time.
- *Microframework Approach:* Flask’s lightweight nature allows for minimal setup, giving developers control over which components to include, thus ensuring a streamlined and efficient development process.
- *Strong Community Support:* The extensive documentation and active community support available for Flask help address development issues and leverage best practices.

## Timeline
### Week 1: Setup

*Concepts:*
- Introduction to Flask and PostgreSQL.
- Setting up the development environment.

*Tasks:*
1. *Development Environment Setup:*
    - Install Python, Flask, PostgreSQL, and VSCode.
    - Set up a virtual environment for the project.
2. *Project Initialization:*
    - Create a new Flask project.
    - Configure the Flask application.
    - Set up a connection to the PostgreSQL database.
3. *Database Models:*
    - Create models for inventory items and customers directly using PostgreSQL.


### Week 2: Product Management

*Concepts:*
- Basic CRUD operations with Flask.
- Flask Blueprints for modular applications.

*Project Tasks:*
1. *Product CRUD Operations:*
    - Create API endpoints for product-related CRUD operations.
    - Implement Create, Read, Update, and Delete operations for products using PostgreSQL.
    - Use Flask Blueprints to organize the code.
2. *Product Management Interface:*
    - Create interfaces for adding, modifying, and managing product information.

### Week 3: User Management and Authentication

*Concepts:*
- Developing RESTful APIs with Flask.
- User authentication and role-based access control using Flask-Login.
- Secure password handling and session management.

*Project Tasks:*
1. *User Authentication:*
    - Set up Flask-Login for user authentication.
    - Create user registration, login, and logout functionalities.
    - Implement role-based access control.
2. *User CRUD Operations:*
    - Create API endpoints for user-related CRUD operations.
    - Implement Create, Read, Update, and Delete operations for users using PostgreSQL.
3. *Secure Password Handling:*
    - Use bcrypt to hash and store user passwords securely.
    - Implement session management for user login sessions.

### Week 4: Comprehensive PoS Interface, Transactions, Invoicing, Authentication, and Initial Deployment

*Concepts:*
- Handling Sales Transactions
- Authentication Using SimpleJWT
- Generating PDFs with Flask Extensions
- Storing and Retrieving Transaction History
- Setting Up Microsoft Azure

*Project Tasks:*
1. *PoS Interface and Transactions:*
   - Ensure proper functioning and integration of API endpoints.
   - Implement transaction processing.

2. *Improving Authentication Using SimpleJWT:*
   - Install and configure SimpleJWT.

3. *Invoice Generation:*
   - Generate PDF invoices using ReportLab or WeasyPrint.
   - Store and retrieve invoices.

4. *Transaction History:*
   - Develop endpoints to retrieve transaction history.
   - Ensure secure access to transaction data.

5. *Initial Deployment:*
   - Set up Microsoft Azure account and VM.
   - Deploy the Flask application on Azure.

### Week 5: Initial Setup, Deployment, and HTTPS Configuration

*Concepts:*
- Setting Up a Virtual Machine
- Configuring Nginx and Gunicorn
- Domain Name Configuration
- Setting Up HTTPS

*Project Tasks:*
1. *Setting Up the VM:*
   - Connect to VM, install Git and PostgreSQL, and clone project.

2. *Configuring Nginx and Gunicorn:*
   - Set up Gunicorn for Flask application.
   - Configure Nginx as a reverse proxy.

3. *Domain Name Configuration:*
   - Configure domain name for Flask and Nginx.

4. *Setting Up HTTPS:*
   - Secure domain with Let's Encrypt and configure HTTPS.

## Learning Resources

- *Flask Documentation:* [Flask Documentation](https://flask.palletsprojects.com/en/2.0.x/)
- *PostgreSQL Documentation:* [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- *Flask-Login:* [Flask-Login Documentation](https://flask-login.readthedocs.io/en/latest/)
- *WeasyPrint:* [WeasyPrint Documentation](https://pythonhosted.org/Flask-WeasyPrint/)
