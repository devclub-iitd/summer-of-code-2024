# DevClub Summer of Code 2024

## Backend Development: Week 3 - User Management and Authentication

### Learning Tasks
Before proceeding with the implementation tasks, ensure you have a solid understanding of the following concepts:

- **RESTful APIs with Flask:**
  - Understand the principles of REST architecture and how to design RESTful APIs using Flask.
  - Learn how to create, read, update, and delete (CRUD) resources via API endpoints.
  - [Flask RESTful API Documentation](https://flask-restful.readthedocs.io/)

- **User Authentication with Flask-Login:**
  - Understand the basics of user authentication and how to manage user sessions in Flask using Flask-Login.
  - Learn how to implement login, logout, and secure routes with user authentication.
  - [Flask-Login Documentation](https://flask-login.readthedocs.io/)

- **Secure Password Handling:**
  - Learn about secure password hashing using bcrypt and the importance of storing passwords securely.
  - Understand session management to maintain user login sessions.
  - [bcrypt Documentation](https://pypi.org/project/bcrypt/)
  - [Session Management in Flask](https://testdriven.io/blog/flask-sessions/)
  - [User Management System](https://faheem7450.medium.com/user-management-system-in-flask-f78dbe350e71)

### Task 1: Staff Authentication and Management
Note: There are a few changes in the Database Schema, so please be sure to apply them before moving on.

#### Setting up Flask-Login for Staff Authentication

1. **Installation and Setup:**
   - Install Flask-Login: `pip install flask-login`.
   - Configure Flask-Login in your Flask application.
   
2. **Staff Model and Authentication:**
   - Create a Staff model with fields for `id`, `username`, `email`, `password`, `is_admin`, and `is_approved` (to indicate whether a staff member has been approved by an admin). 
   - Implement staff registration to create new staff accounts (admin-only operation).
   - Implement staff login to authenticate staff and establish a session.
   - Implement staff logout to terminate staff sessions.

3. **Admin Rights:**
   - Define a boolean field `is_admin` in the Staff model to indicate admin rights.
   - Implement role-based access control to restrict certain API endpoints to admin users only (e.g., creating new staff, approving staff).

### Task 2: Staff and Customer Management

#### Implementing Staff and Customer CRUD Operations

1. **Create API Endpoints for Staff:**
   - Design and implement RESTful API endpoints for managing staff (`/staff`).
   - Define endpoints for Create, Read, Update, and Delete operations.
   - Ensure proper HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) are used as per REST conventions.
   - Restrict staff creation, modification, and approval endpoints to admin users only.

2. **Create API Endpoints for Customers:**
   - Design and implement RESTful API endpoints for managing customers (`/customers`).
   - Define endpoints for Create, Read, Update, and Delete operations.
   - Ensure proper HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) are used as per REST conventions.

3. **Database Integration:**
   - Configure Flask to connect to a PostgreSQL database.
   - Implement SQLAlchemy models for Staff and Customer entities.
   - Use migrations (Alembic) to manage database schema changes.

4. **CRUD Operations:**
   - Implement functions/methods to handle:
     - Create a new staff member (admin-only).
     - Approve a new staff member (admin-only).
     - Retrieve a list of all staff members or a specific staff member by ID.
     - Update an existing staff member (admin-only).
     - Delete a staff member from the database (admin-only).
     - Create a new customer.
     - Retrieve a list of all customers or a specific customer by ID.
     - Update an existing customer.
     - Delete a customer from the database.

### Task 3: Transaction Management

#### Implementing Transaction CRUD Operations

1. **Transaction Model:**
   - Create a Transaction model with fields for `id`, `c_id` (customer ID), `s_id`, `product_amount_list`, `date`, and `time`.
   - Ensure proper relationships between the Transaction model and the Customer and Staff models.

2. **Create API Endpoints for Transactions:**
   - Design and implement RESTful API endpoints for managing transactions (`/transactions`).
   - Define endpoints for Create, Read, Update, and Delete operations.
   - Ensure proper HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) are used as per REST conventions.

3. **CRUD Operations:**
   - Implement functions/methods to handle:
     - Create a new transaction.
     - Retrieve a list of all transactions or a specific transaction by ID.
     - Update an existing transaction.
     - Delete a transaction from the database.

### Task 4: Secure Password Handling

#### Implementing Secure Password Handling

1. **Password Hashing:**
   - Use bcrypt to hash staff passwords before storing them in the database.
   - Implement password hashing during staff registration.

2. **Password Verification:**
   - Implement password verification during staff login to ensure the entered password matches the stored hashed password.

3. **Session Management:**
   - Configure session management to maintain staff login sessions.
   - Securely store session information and handle session expiration.

### Bonus Tasks for Week 3

1. **Email Verification:**
   - Implement email verification during staff registration to ensure valid email addresses.
   - Send verification emails with unique tokens for account activation.

2. **Password Reset:**
   - Implement password reset functionality to allow staff to reset their passwords if they forget them.
   - Send password reset emails with unique tokens for secure password updates.

3. **Multi-Factor Authentication (MFA):**
   - Implement multi-factor authentication to enhance staff account security.
   - Integrate with an MFA provider or use time-based one-time passwords (TOTP).

4. **Logging and Monitoring:**
   - Implement logging to track authentication events (e.g., logins, logouts, failed login attempts).
   - Monitor staff activity and identify potential security threats.

5. **Advanced Role Management:**
   - Implement more complex role hierarchies and permissions.
   - Allow dynamic role assignment and modification through the admin interface.

6. **Transaction Analytics:**
   - Implement analytics for transactions to provide insights into sales and performance.
   - Create reports for transaction history, sales trends, and staff performance.

### Conclusion
By the end of Week 3, you should have a comprehensive understanding of user management and authentication in Flask. This includes setting up secure staff authentication, managing staff roles and permissions, handling staff and customer-related CRUD operations, and ensuring secure password storage and session management. Additionally, you will implement transaction management with full CRUD functionality. Ensure to test thoroughly and document your progress to facilitate further development in subsequent weeks.

Happy coding!
