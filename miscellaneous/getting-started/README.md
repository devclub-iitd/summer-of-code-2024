# Getting Started with DSoC 2024

Welcome to the DSoC 2024! We are excited to have you join us on this journey. This guide will help you get started and provide you with the necessary information to make the most of your experience.

## Git and GitHub Setup

1. **Create a GitHub Account**: If you don't already have a GitHub account, you can create one [here](https://github.com/signup).

2. **Install Git**: Download and install Git from [here](https://git-scm.com/downloads). Most unix-based systems (Linux, macOS) come with Git pre-installed so you can skip this step.

3. **Configure Git**: This step is important and you must follow the guide carefully to avoid any issues.
    - **Create SSH Key**: Run the following command in your terminal to create an SSH key.
        ```bash
        ssh-keygen -t ed25519 -C "your_email@example.com"
        ```
        Press `Enter` to save the key in the default location.

    - **Add SSH Key to GitHub**: Run the following command to copy the SSH key to your clipboard.
        ```bash
        clip < ~/.ssh/id_ed25519.pub
        ```
        Go to your GitHub account settings and click on `SSH and GPG keys` in the sidebar. Click on `New SSH key` and paste the key in the box.
        
        In case the `clip` command doesn't work, you can open the `id_ed25519.pub` file in a text editor and copy the contents manually.

    - **Add name and email**: Run the following commands to configure Git with your name and email.
        ```bash
        git config --global user.name "Your Name"
        git config --global user.email "your_email@example.com"
        ```

4. **Fork the Repository**: Fork the [DSoC 2024 Repository](https://github.com/devclub-iitd/summer-of-code-2024/fork) to your account. This will create a copy of the repository in your account that you can work on.

5. **Clone the Repository**: Clone the repository to your local machine using the following command.
    ```bash
    git clone git@github.com:your_github_username/summer-of-code-2024.git
    ```

6. **Make Changes**: Open the repository in your favorite code editor and make changes to `author.json` file. Add your details and save the file.

7. **Commit Changes**: Run the following commands to commit your changes.
    ```bash
    git add .
    git commit -m "Add author details"
    git push origin main
    ```

8. **See Changes**: Go to your forked repository on GitHub and you should see the changes you made in the `author.json` file.