# Frontend Development : Week 4

Hopefully, with the buffer week, everyone has completed their backlogs and made themselves comfortable with ReactJS and APIs as well! This week, we will be building the **Admin Portal** - the last and final page to complete our frontend pages, before we deploy and integrate ML models (only for those doing both).

### Learning Tasks

- ### React JS

  - As introduced last week. The below resources are kept for your ready references.

  - Resources :

    - Mosh's [React Tutorial for beginners](https://www.youtube.com/watch?v=SqcY0GlETPk)
    - The official [React Documentation](https://react.dev/learn).
    - [W3 Schools](https://www.w3schools.com/react/default.asp) - _good start for beginners!_
    - [JSX Documentation](https://legacy.reactjs.org/docs/introducing-jsx.html)
    - [React Routers](https://reactrouter.com/en/main) is a popular routing package for React that enables rendering different components based on the URL.
    - [React-PDF](https://react-pdf.org/) - used for easy invoice generation.
    - [Chart.js](https://www.chartjs.org/) & [React-vis](https://www.npmjs.com/package/react-vis)- **These are very basic, easy-to-use charting javascript libraries for analytics! (Check out more libraries for brownie points!)**

- ### Bootstrap

  As introduced last week. The below resources are kept for your ready reference!

  - Resources :
    - [Bootstrap Official Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - [Bootstrap Icons For Use](https://icons.getbootstrap.com/)

### Task - Building the Admin Portal!

On popular demand, and with interest of time, we are providing to you a [sample template](https://www.figma.com/design/6PozD2pvROpaQgwfDVbgKb/Frontend-DSoC-Week-4---Sample-Admin-Portal?node-id=1-2&t=yC6Q3VxtjStErhdR-1) of how the _Admin Portal_ should look.

We are looking at five main sections in the Admin's Portal.

- **Dashboard**
  - As has been shown in the sample template, the dashboard should contain the following numbers - Number of Buyers (Customers), No of Cashiers, No of Store helpers, and No of delivery boys. No need to make it specific to one quarter, you may make it as an overall number.
  - The top three transactions of the day, is shown to keep account of the maximum billed amount by any customer for the day. This might help in future discounts for generous customers (or even in identifying fraudulent activities).
  - The News should show all the items that are marked _Urgent_ or _Low_, with an option to waitlist or place order. The place order page can be taken from the previous cashier portal pages as well (as an inspiration of course, not the exact same). Also, try to give _alerts_ to the Admin of the top most urgently needed stock for him to pay attention to the news section.
  - Show brief analytics of revenue versus cost during the current financial year. Order Statistics is for showing category-wise maximum sales. Use charting libraries for these!
- **Stocks Management**
  - Stocks Inventory has options for showing all items, or items which are marked Urgent, items marked Low, Items for which orders have been placed, and items waitlisted! The Order Placed and Order Waitlisted pages should show Transaction status and Transaction date as well in their respective sections.
- **Transactions**
  - This shows all transactions (_can add filtering by date, will have extra brownie points!_) of customers and cashier names as well.
- **Employers**
  - This shows the list of all existing employees in the company, with their department and work status. Also works well for giving out best employee awards too! Add more functionalities for admins to evaluate if other employees are working well or not! (_brownie points for this!_)
- **Analytics**
  - This will show the profits curve to date (yearly only, but no problem if extended to from origin to current date).
  - Yearly profit circular graph is for comparing profits on Y-O-Y basis. Bar graphs may also be used for this. The circle graphs are read as the inner circle being least profits and outermost being most.
  - Equipment Utilisation should show item-wise analytics. The same analytics page may be extended for item wise as well.
  - Show the top 3 most purchased items and least 3 purchased items (by quantity).
  - Also show the top 3 most purchased (by rate of increase in purchase) and least as well.

**Before you start integrating with APIs, make sure your frontend structure is ready!**

- For those who are doing both _Frontend_ and _Backend_ :

  - You should have API endpoints which fetch you item names and their prices from database, as well as item quantity, item status.
  - Add functionalities of placing orders, waitlisting them, deleting them, etc.
  - Similarly add functionalities of adding new employees, removing existing ones, etc.
  - Use your API from the previous week for admin login.

- For those doing only _Frontend_ :

  - API Documentation provided.
    - (_First, hardcode with random string variables and complete your frontend by the time the APIs are available._)

### Bonus Tasks

- Explore other charting libraries as well like `three js` for 3D animations, etc.! There will be brownie points for better data visualisation, and less data mis-interpretation errors.
- Add more functionalities to fetch employee work functions and ability (possibly can only be done by backend peeps, but others should come up with ideas!)
- Try to think of more methods of analytics that an admin might look for!
