# DevClub Summer of Code 2024

## Backend Development: Week 4 - Comprehensive PoS Interface, Transactions, Invoicing, Authentication and Initial Deployment

### Learning Tasks
Before proceeding with the implementation tasks, ensure you have a solid understanding of the following concepts:

**First Half:**

- **Handling Sales Transactions:**
  - Learn how to process and manage sales transactions within your application.
  - Understand how to update database fields corresponding to each transaction.

- **Authentication Using SimpleJWT**
  - You have to add authentication to your project. You can refer to the official [documentation](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/) for more details.

- **Generating PDFs with Flask Extensions:**
  - Understand how to generate PDF documents using Flask extensions such as ReportLab or WeasyPrint.
  - Learn how to store and retrieve these PDFs.
  - [Generate Dynamic PDFs with Flask](https://www.youtube.com/watch?v=C8jxInLM9nM) 
  - [ReportLab User Guide](https://www.reportlab.com/docs/reportlab-userguide.pdf)
  - [WeasyPrint Documentation](https://doc.courtbouillon.org/weasyprint/stable/)
  
- **Storing and Retrieving Transaction History:**
  - Understand best practices for storing and retrieving transaction data.
  - Learn about data integrity and secure storage practices for transaction data.
  - [Flask-SQLAlchemy Documentation](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)

**Second Half:**

- **Setting Up Microsoft Azure:**
  - Learn how to set up a Microsoft Azure account.
  - Understand how to set up a virtual machine on Azure, clone your repository, and run the initial setup.

### Task 1: PoS Interface and Transactions

#### Ensuring Proper Functioning and Integration of API Endpoints

1. **API Endpoint Integration:**
   - Ensure all existing API endpoints for products, users, staff, and transactions are properly integrated.
   - Verify that transactions update the corresponding database fields accurately.

2. **Transaction Processing:**
   - Implement the logic for processing sales transactions.
   - Ensure that every transaction leads to the correct updates in the inventory and transaction history.

### Task 2: Improving Authentication Using SimpleJWT
   - Install Simple JWT using pip in the virtual environment.
   - Update settings.py, urls.py and other neccessary files to add Simple JWT to the project.

### Task 3: Invoice Generation

#### Generating PDF Invoices

1. **Library Selection:**
   - Choose a library for PDF generation: ReportLab or WeasyPrint.
   - Install the chosen library using `pip install reportlab` or `pip install weasyprint`.

2. **PDF Invoice Generation:**
   - Implement functionality to generate PDF invoices for each transaction.
   - Ensure invoices contain all necessary details (e.g., transaction ID, product details, total amount).

3. **Local Storage:**
   - Store generated PDF invoices locally for now.
   - Implement functionality to retrieve and display these invoices as needed.

### Task 4: Transaction History

#### Developing Endpoints for Transaction History

1. **Transaction History Endpoints:**
   - Create endpoints to retrieve transaction history (`/transactions/history`).

2. **Secure Access:**
   - Ensure secure access to transaction history data, possibly by restricting access to authenticated and authorized staff.


### Task 5: Initial Deployment

#### Setting Up Microsoft Azure and Initial Deployment

**All students enrolled at IIT Delhi (or any other educational institute) are eligible for a free Microsoft Azure account. We will be using Azure to host our Flask project. Follow the steps below to set up your Azure account:**

1. **Azure Account Setup:**
   -⁠ ⁠Visit [Azure for Students](https://azure.microsoft.com/en-in/free/students) page.
   -⁠ ⁠Click on the "Start free" button.
   -⁠ ⁠Sign in using your IITD Kerberos ID and password.
   - ⁠Enter your details accurately and proceed.
   -⁠ ⁠After signing in, click on "Provide more information."
   -⁠ ⁠Follow the instructions to download the Microsoft Authenticator app on your phone.
   -⁠ ⁠Scan the provided QR code using the Microsoft Authenticator app.
   - ⁠Complete the remaining steps to finish setting up your account.
   - Complete the sign-up process and verify your account. No credit card is required for this. You will be given a $100 credit to use Azure services for free.

2. **Virtual Machine Creation:**
   - Once you have completed the sign-up process, go to the Azure Portal and search for "Virtual Machines".
   - Create a Virtual Machine in the Central India region and choose the basic configuration (Standard B1s (1 vcpu, 1 GiB memory)) for the virtual machine. Choose Ubuntu 20.04 LTS as the operating system for the Virtual Machine.

3. **Connecting to the Virtual Machine:**
   - Once the Virtual Machine is created, go to the Overview tab and click on "Connect". Follow the instructions to connect to your Virtual Machine using SSH. [How to SSH](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ssh-from-windows).

### Bonus Tasks for Week 4

1. **Custom Invoice Design:**
- Allow customization of the invoice layout, including adding company logos, custom fonts, and color schemes.
- Provide options for different invoice templates that staff can select from while generating invoices.

2. **Dashboard for Admin:**
- Create an admin dashboard that provides an overview of key metrics, such as total sales, inventory levels, and top-selling products.
- Include visualizations like pie charts, bar graphs, and line charts.

### Conclusion
By the end of Week 4, you should have a comprehensive PoS interface with transaction processing, PDF invoice generation, and secure transaction history retrieval. Additionally, you will have deployed your application to Microsoft Azure, ensuring it is accessible and operational in a production-like environment. This week is crucial for integrating all components and ensuring a smooth transition to deployment.

Happy coding!
