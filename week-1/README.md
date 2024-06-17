# DevClub Summer of Code 2024

## Backend Development: Week 1

### Learning Tasks
So, let's get started with learning first of all...
Read and Digest the following resources before moving forward to the Implementation Tasks.

Each Request sent from the client's side results in a response from server which has 
a few components including :  
 - Status Line:   
     - HTTP Version: Indicates the HTTP version used, e.g., HTTP/1.1.   
     - Status Code: A three-digit code indicating the result of the request, e.g., 200 for OK, 404 for Not Found, 500 for Internal Server Error.    
     - Mozilla's [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
     - Reason Phrase: A brief description of the status code, e.g., OK, Not Found, Internal Server Error.

 - Headers:
     - Mozilla's [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).  

 - Body:
     - The body of the response contains the actual data requested by the client. It can be in various formats such as:
        HTML: For web pages.   
        JSON: Commonly used in APIs for structured data.   
        XML: Another format used for structured data.  
        Binary data: Such as images, videos, or files.   

 - Optional Components:
     - Cookies: Data sent by the server to be stored on the client-side and sent back with subsequent requests.
     - CloudFlare's [HTTP Cookies](https://www.cloudflare.com/en-gb/learning/privacy/what-are-cookies/)

Additional Concepts : 
These are some of the vital concepts/Tools for backend development: 
- [JSON Web Tokens](https://jwt.io/): Try to find where JWTs are used in day-to-day activities and authorization requests, and see what content they store
- [Postman](https://www.postman.com/): You can use this to write about APIs you've written or found, and share or use them conveniently later.
We would strictly recomment to use Postman/Thunder Client or any other API testing tool, as it helps a lot while developing.

### Task 1: Environment Setup
 - **Task 1A: Install Python, Flask, and PostgreSQL.**
    - Ensure you have the latest versions of Python, Flask, and PostgreSQL installed on your machine.
    - Set up a virtual environment for the project. You may use [Venv](https://docs.python.org/3/library/venv.html) or [virtualenv](https://help.dreamhost.com/hc/en-us/articles/115000695551-Installing-and-using-virtualenv-with-Python-3) for this purpose. 
    - Install necessary packages: `Flask`, `psycopg2-binary`.
    - [Flask Documentation](https://flask.palletsprojects.com/)
    - [PostgreSQL Documentation](https://www.postgresql.org/docs/)

 - **Task 1B: Project Structure and Database Connection**
    - Create the main application, it's configuration files and set up a structured Flask project directory.
    - [Flask Project Structure Guide](https://flask.palletsprojects.com/en/2.0.x/tutorial/factory/)
    - Configure the Flask application to connect to the PostgreSQL database and define the database Connection settings alongwith. You may use Psycopg2 for this purpose.
    - [Psycopg2 Documentation](https://www.psycopg.org/docs/)

 - **Task 1C: Model Design**
    - Define fields and relationships between models:
        - `InventoryItem` model with fields for Item_SKU, Item_Name, Item_Description, Item_Price, and Item_Qty.
        - `Customer` model with fields for c_ID, c_name, c_email, and c_contact.
        - `Staff` model with fields for s_ID, s_name, s_email, s_isAdmin, s_contact.
        - `Transaction` model with fields for t_ID, c_ID, t_date, and t_amount, t_category.
    - [Database Design Basics](https://support.microsoft.com/en-gb/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5)

 - **Task 1D: Relationships and Constraints**
    - Link `Transaction` model to `Customer` model, `Staff` model, and `InventoryItem` model using a foreign key.
    - [PostgreSQL Foreign Key Documentation](https://www.postgresql.org/docs/current/tutorial-fk.html)

 - **Task 1E: Database Migrations, Reviewing and Testing**
    - Write SQL scripts to create tables based on the designed models. and Apply migrations to create database tables.
    - [PostgreSQL Create Table Documentation](https://www.postgresql.org/docs/current/sql-createtable.html)
    - Write basic tests to validate model fields and relationships and Ensure that all models have necessary fields and constraints.
    - [Pytest Documentation](https://docs.pytest.org/)

### Bonus Tasks for Week 1
1. **Database Indexing:** Add indexing to frequently queried fields in the models (e.g., SKU for `InventoryItem`, email for `Customer`).
2. **Model Validation:** Implement validation methods within the models to ensure data integrity (e.g., price must be non-negative, email format validation).
3. **Advanced Relationships:** Create more complex relationships, such as a self-referential relationship for categories within `InventoryItem` (e.g., parent-child hierarchy for product categories).
4. **Seed Data:** Write scripts to populate the database with initial seed data for inventory items, customers, and transactions for testing purposes.
5. **Model Documentation:** Create comprehensive documentation for each model, including field descriptions, relationships, and example usage.
6. **Custom Model Methods:** Add custom methods to models for common operations (e.g., calculating total value of inventory items, retrieving all transactions for a customer).
7. **Database Schema Visualization:** Generate a visual representation of the database schema using a tool like ERAlchemy or dbdiagram.io to help understand model relationships.
