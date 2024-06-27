# DevClub Summer of Code 2024

## Backend Development: Week

### Learning Tasks
Before diving into the implementation tasks, ensure once "again" that you're familiar with the following concepts:

- **Flask Framework:**
  - Understand Flask basics and its role in building web applications.
  - Learn about Flask extensions and how they enhance Flask functionality.
  - [Flask Documentation](https://flask.palletsprojects.com/)

- **PostgreSQL Database:**
  - Review PostgreSQL basics including CRUD operations and database setup.
  - Understand how to integrate PostgreSQL with Flask applications using SQLAlchemy or directly with psycopg2.
  - [PostgreSQL Documentation](https://www.postgresql.org/docs/)

- **Flask Blueprints:**
  - Learn how Flask Blueprints help in structuring large applications.
  - Understand the benefits of modular application design and how Blueprints facilitate it.
  - [Flask Blueprints Guide](https://flask.palletsprojects.com/en/2.0.x/blueprints/)

- **SQLAlchemy:**
  - Learn about SQLAlchemy and its ORM capabilities.
  - Understand how to define models, perform CRUD operations, and manage database migrations.
  - [SQLAlchemy Documentation](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/quickstart/)
  - [SQLAlchemy ORM Tutorial](https://docs.sqlalchemy.org/en/14/orm/tutorial.html)

- **Building APIs:**
  - Understand the principles of RESTful API design.
  - Learn how to build APIs using Flask and Flask-RESTful.
  - Get familiar with authentication and authorization mechanisms.
  - [RealPython Tutorial](https://realpython.com/flask-connexion-rest-api/)



### Task 1: Product CRUD Operations
(Additional Notes: The term InventoryItem is referred to as Product here. Feel free to edit or add additional fields in your Database as needed. Additionally, include a Password field in the Staff Model.)
#### Implementing Product CRUD Operations

1. **Create API Endpoints:**
   - Design and implement RESTful API endpoints for managing products (`/products`).
   - Define endpoints for Create, Read, Update, and Delete operations.
   - Ensure proper HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) are used as per REST conventions.

2. **Database Integration:**
   - Configure Flask to connect to a PostgreSQL database, if not done yet.
   - Implement SQLAlchemy models for Product entity. (Optional but recommended)

3. **CRUD Operations:**
   - Implement functions/methods to handle:
     - Create a new product.
     - Retrieve a list of all products or a specific product by ID.
     - Update an existing product.
     - Delete a product from the database.

#### Using Flask Blueprints

1. **Blueprint Setup:**
   - Create Flask Blueprints to organize product-related routes and views.
   - Structure the application into manageable components using Blueprints.
   - Register Blueprints in the main Flask application.

2. **Modular Application Design:**
   - Ensure each Blueprint encapsulates related functionality (e.g., CRUD operations).
   - Leverage Blueprints for scalability and maintainability of the application.

### Task 2: Product Management Interface

#### Developing Product Management Interfaces

1. **Admin Interface:** (You must be doing this as a part of frontend Track)
   - Create views/templates for managing products (list, create, update, delete).
   - Use Flask forms or JavaScript frameworks (like React or Vue) for frontend interactivity. (Optional)

2. **Forms and Validation:** (Optional but recommended)
   - Implement forms for adding and editing product details.
   - Validate form inputs to maintain data integrity (e.g., required fields, data formats).

3. **User Permissions:**
   - "Define" roles and permissions (e.g., admin, staff) to control access to product management features.

### Bonus Tasks for Week 2

1. **Advanced CRUD Operations:**
   - Implement pagination and filtering for product lists.
   - Add sorting capabilities based on various product attributes.

2. **Testing:**
   - Write unit tests using pytest to verify CRUD operations and API endpoints.
   - Include integration tests to ensure proper interaction between frontend and backend.

3. **Documentation:**
   - Generate API documentation using tools like Swagger or Flask-RESTPlus.
   - Document frontend interfaces and backend architecture for future reference.

4. **Error Handling:**
   - Implement error handling mechanisms for API responses (e.g., 404 Not Found, 500 Internal Server Error).
   - Use Flask error handlers to provide meaningful error messages.

5. **Security Measures:**
   - Apply security best practices such as input validation, SQL injection prevention, and CSRF protection.
   - Ensure sensitive data (like passwords) are stored securely using hashed values.

### Conclusion
By the end of Week 2, you should have a robust understanding of building CRUD operations with Flask, organizing code using Blueprints, and creating interfaces for product management. Ensure to test thoroughly and document your progress to facilitate further development in subsequent weeks.

Happy coding!
