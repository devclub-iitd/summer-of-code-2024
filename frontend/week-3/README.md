# Frontend Development : Week 3

As discussed in the last session, this week, we are going to start with ReactJS and incrementally build our portals.

### Learning Tasks

- ### React JS

  - React JS is a powerful JavaScript library used for building dynamic and interactive websites. It offers several advantages, including the ability to create applications on a single page and the reusability of website components. By dividing a website into reusable "components," React JS enables developers to build websites faster and more efficiently. This eliminates the need for repetitive code, such as copying and pasting for creating a navbar or a list. React JS utilizes JSX, a syntax extension of JavaScript, which provides a declarative way to manage the UI state. Instead of manually manipulating each piece of content that needs to change based on user actions, React JS allows developers to describe these states and efficiently renders them. This makes the development process more organized and maintainable.

  - JSX is a syntax extension of JavaScript that is commonly used in React. It allows us to write HTML elements in JavaScript and seamlessly place them in the DOM without the need for createElement() and appendChild() methods. When JSX expressions are compiled, they are transformed into regular JavaScript function calls, making it easier to understand and work with. By leveraging JSX, developers can create dynamic and interactive user interfaces with ease.

  - ReactJS is made of **components**. The _State_ of a component is an object that holds some information that may change with time or user interaction. State can be used with React Hooks like useState. They are mutable and React re-renders the component whenever its state changes, manipulating the DOM accordingly. (Conditional rendering!)

  - Resources :

    - Mosh's [React Tutorial for beginners](https://www.youtube.com/watch?v=SqcY0GlETPk)
    - The official [React Documentation](https://react.dev/learn).
    - [W3 Schools](https://www.w3schools.com/react/default.asp) - _good start for beginners!_
    - [JSX Documentation](https://legacy.reactjs.org/docs/introducing-jsx.html)
    - [React Routers](https://reactrouter.com/en/main) is a popular routing package for React that enables rendering different components based on the URL.
    - [React-PDF](https://react-pdf.org/) - used for easy invoice generation.

- ### Bootstrap

  As introduced last week. The below resources are kept for your ready reference!

  - Resources :
    - [Bootstrap Official Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - [Bootstrap Icons For Use](https://icons.getbootstrap.com/)

### Task - Building the Cashier Portal!

On popular demand, and with interest of time, we are providing to you a [sample template](https://www.figma.com/design/pQu0l187VcoWnM5Icl9sSs/DSoC-Frontend-Cashier-Portal-Sample-Template?node-id=0-1&t=Hb5IyIGmWUwIlXc8-1) of how the _Cashier Portal_ should look.

Before starting, make sure you code up (probably structure your code better!) your login and sign up pages in ReactJS. It won't be too much of a hassle!

- Once the cashier login is successful, the customer login page needs to be set up. Name and Mobile are marked as mandatory fields in order to maintain a unique profile for each customer. Address is added to keep the option for deliveries open!
- For clarity, upon clicking the "Go" option, the sidebar with customer details entered should be updated.
- On the checkout page, the customer name should be displayed.
- In the checkout page, there should be a search option which, like a dropdown, allows us to select items and add them to the cart. The sidebar should also have a category-wise distinction of items in case the customer wants to exchange the current item with another of a different brand.
- As you add items to the cart, the total price and total number of items should increase accordingly. The '+' and '-' buttons should increase and decrease the quantity, and the prices should be updated accordingly. The bin icon should delete the item from the list, and it should not appear on the invoice.
- Tax and discount rates are at the user's discretion. These rates need to be added in the final invoice that will be generated. For simplicity, assume all the tax and discount rates are uniform.
- Please follow the `sample bill essentials template` in the `sample template` file for clarity on what all should be included.

**Before you start integrating with APIs, make sure your frontend structure is ready!**

- For those who are doing both _Frontend_ and _Backend_ :

  - You should have API endpoints which fetch you item names and their prices from database.
  - Use your API from the previous week for cashier login.

- For those doing only _Frontend_ :

  - API Documentation provided.
    - (_First, hardcode with random string variables and complete your frontend by the time the APIs are available._)

### API Documentation - [Click Here](https://github.com/devclub-iitd/summer-of-code-2024/edit/front-end/frontend/week-3/APIs)

### Bonus Tasks

- Can you send the generated invoice to the registered phone number of the customer? (Assume for simplicity, it is whatsapp-enabled). Read about `react-share`.
- Only for those doing both _Backend_ and _Frontend_ :
  - Try incorporating different discount rates for different items.
