# DevClub Summer of Code 2024

## Backend Development: Week 5 - Initial Setup, Deployment, and HTTPS Configuration

### Learning Tasks
Before proceeding with the implementation tasks, ensure you have a solid understanding of the following concepts:

- **Setting Up a Virtual Machine:**
  - Learn how to connect to a virtual machine (VM) and run initial setup commands.
  - Understand the basics of installing software and managing dependencies on a VM.
  - **Resources:**
    - [How to Connect to a Linux VM](https://linuxize.com/post/how-to-connect-to-a-linux-server-using-ssh/)
    - [Introduction to Virtual Machines](https://www.vmware.com/topics/glossary/content/virtual-machine.html)

- **Configuring Nginx and Gunicorn:**
  - Learn how to set up Nginx as a web server to serve your Flask application.
  - Understand how to use Gunicorn as the application server for running your Flask app.
  - **Resources:**
    - [Serving Flask Applications with Gunicorn and Nginx on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-22-04)
    - [Nginx Documentation](https://nginx.org/en/docs/)
    - [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/)

- **Domain Name Configuration:**
  - Understand how to configure your domain name to point to your VM.
  - Learn how to update your Flask and Nginx settings to allow requests from your domain.
  - **Resources:**
    - [How to Set Up a Host Name with DigitalOcean](https://www.digitalocean.com/docs/networking/dns/)
    - [Flask Configuration Documentation](https://flask.palletsprojects.com/en/2.0.x/config/)
    - [NGINX Server Names](http://nginx.org/en/docs/http/server_names.html)

- **Setting Up HTTPS:**
  - Learn the importance of HTTPS for secure communication.
  - Understand how to configure HTTPS for your domain using Let's Encrypt.
  - **Resources:**
    - [Let's Encrypt Documentation](https://letsencrypt.org/getting-started/)
    - [Certbot Documentation](https://certbot.eff.org/)

### Task 1: Setting Up the Virtual Machine

**Completing initial Setup:**
- Connect to your virtual machine using SSH. 
- Install Git on the Virtual Machine using the command: ```bashsudo apt install git```
- Install PostgreSQL on the Virtual Machine using the command: ```bashsudo apt install postgresql```
- Clone your Flask project from GitHub on the Virtual Machine using the command: ```bashgit clone <your-repo-url>```
- Install all the dependencies for your Flask project in a virtual environment using the command: ```bashpip install -r requirements.txt```
- Run your Flask project on the Virtual Machine using the command: ```bashpython manage.py runserver```


### Task 2: Configuring Nginx and Gunicorn

**Setting Up Gunicorn**
- Install Gunicorn: Install Gunicorn to serve your Flask application.
- Run Gunicorn: Configure Gunicorn to run your Flask app with multiple workers for better performance.

**Setting Up Nginx**
- Install Nginx: Install Nginx to serve as a reverse proxy for your Flask application.
- Configure Nginx for Your Flask App: Update the Nginx configuration to proxy requests to your Gunicorn server. Ensure proper configuration to serve static files and handle requests.
- Enable the Nginx Configuration: Enable your Nginx configuration and restart the Nginx service.

- Follow this tutorial for detailed instructions : [Digital_Ocean](https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-22-04)

### Task 3: Setting up a Domain Name
We will be setting up a domain name for our Django project. Follow the steps below to get a domain name:
- Raise a request for a domain name by sending an email from your institutional email address (@iitd.ac.in). The subject of the email should be DevClub Summer of Code 2024: Domain Name Request. The body of the email should contain your name, entry number, your github username and your Virtual Machine's Public IP Address. You will be given a domain name in the format <your-github-username>.iitd.tech.
- Reconfigure your Flask and NGINX settings to allow requests from your domain name.

### Task 4: Setting Up HTTPS
We will be setting up HTTPS for our domain name. Follow the steps below to get a SSL certificate for your domain name:
- Follow the steps in this [Digital Ocean tutorial](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04) to get a SSL certificate for your domain name.
- Reconfigure your NGINX settings (if not reconfigured automatically) to use HTTPS instead of HTTP. You can refer to the [NGINX documentation](https://docs.nginx.com/nginx/admin-guide/web-server/web-server/#setting-http-headers) for this.

### Bonus Tasks for Week 5

1. **Monitoring and Logging:**
   - Set up logging for Nginx and Gunicorn to monitor application performance and errors.
   - Use tools like `journalctl` and `systemctl` for monitoring logs.

2. **Firewall Configuration:**
   - Configure UFW (Uncomplicated Firewall) to allow only necessary ports (e.g., 22 for SSH, 80 for HTTP, 443 for HTTPS).

3. **Performance Optimization:**
   - Optimize Gunicorn settings for better performance.
   - Configure Nginx caching and compression for improved response times.

4. **Database Backup:**
   - Set up regular backups for your PostgreSQL database to prevent data loss.

### Conclusion
By the end of Week 5, you should have successfully set up your virtual machine, configured Nginx and Gunicorn to serve your Flask application, and secured your domain with HTTPS. This setup will ensure your application is ready for production with a secure and scalable infrastructure.

Happy coding!