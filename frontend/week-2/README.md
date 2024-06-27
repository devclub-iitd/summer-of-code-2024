# Frontend Development : Week 2

As discussed in the last week's session, this week, we will have a short introduction to what is API (for a detailed approach on how to make one, follow backend's materials) and how we use API to set up communication between server and client, in order to retrive, authenticate and store information.

This week is all about JS (and ofc, HTML, CSS and Bootstrap!) and getting comfortable with it, before we introduce ReactJS in the next week!

### Learning Tasks

- #### Javascript :

  Javascript is the programming language which runs on the web! Today, it also powers many backend servers and user applications. We use Javascript on the frontend to add logic to our webpage to make it interactive, using both Browser APIs and Web APIs.

  - Resources :
    - [Javascript Intro, Tutorials and References](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - [Programming with Mosh - JS Tutorial](https://www.youtube.com/watch?v=W6NZfCO5SIk)
    - [The Modern Javascript Tutorial](https://javascript.info/)
    - [DevClub - JS](https://www.youtube.com/watch?v=gC4X0ZRiJo4)

- #### What is API?

  API is an acronym that stands for _Application Programming Interface_ and according to wikipedia, an application programming interface (API) is a computing interface which defines interactions between multiple software intermediaries.

  - Resources :
    - [AWS API Documentation](https://aws.amazon.com/what-is/api/#:~:text=API%20stands%20for%20Application%20Programming,other%20using%20requests%20and%20responses.)
    - [RedHat's API Documentation](https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces)
    - [Documentation on Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - We will be using this for this week's task, so understand it well!
    - [API Basics](https://medium.com/@techwritershub/the-basics-of-api-for-beginners-a-complete-guide-be4d0c9d9b15#:~:text=API%20stands%20for%20Application%20Programming,communication%20between%20different%20software%20applications.) - a good article for understanding APIs as beginners.

- #### Bootstrap

  Bootstrap is the world's most popular framework for building responsive, mobile first sites. It utilises SaaS, a pre-built grid and powerful Javascript plug-ins. Saas is a scripting language that is compiled into CSS. Due to its structured syntax and additional features Saas is preferred over CSS.

  - Resources :
    - [Bootstrap Official Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - [Bootstrap Icons For Use](https://icons.getbootstrap.com/)

### Task 1 - Fetch APIs

Now that we have the login and sign up pages ready (hopefully, tailored to send info regarding admin or cashier portal login),we will now use Fetch APIs to interact with the given API to autheticate information sent from client.
The **Fetch method** is a method provided by the Fetch API that is built into the browser. It is used to get access to data through the use of the HTTP protocol. It simplifies fetching resources, handling responses, and managing errors.

        const requestUrl = "url of whatever you want to make a request to";
        fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
        // do something with the data the API has returned
        })

This is the general syntax of how a fetch request is made.

- Add this to the `<script> </script>` body or in your `script.js` file. (Or better, try it yourself!)
- Make functions to check if it matches with what is entered by the user.
- Display _Error Messages_ and _Success Messages_, depending on status of authentication. (Make it as informative as possible, no one likes to see a general "try again").

- #### For those doing both backend and frontend :
  - use, (or create) apis to authenticate the entered client information with the server information.
- #### For those doing only frontend :
  - Dummy API - <!-- - <add specific stuff related to the API, how to access name, pass, isAdmin is true or not and everything> -->

### Task 2 - Bootstrap

Add the following lines to your code.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Dashboard</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
  />
</head>

<body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
    crossorigin="anonymous"
  ></script>
</body>
```

- In this task we're going to make a basic portal. Learn about Containers, Rows and Columns in Bootstrap.
- Try to redesign your login and sign up pages with Bootstrap. Make the UI look more professional.
- After sucessful authentication, how about a cute display of the user's name and designation (admin/cashier)?
- Make a basic portal frontend with a navbar.
- Use the navbar class to design the navbar. Add your own effects and animations, no restrictions!
  - #### For Cashier (must haves) :
    - Logout Option
    - Profile Icon
  - #### For Admin (must haves) :
    - Logout Option
    - Profile Icon
    - Analytics Icon (choose whichever you feel appropriate)
- #### Must Haves for a Cashier portal :

  - A form to enter customer mobile no.

    (Further API integration will be covered in the next task)

    _You are free to add more, as you deem appropriate_.

- #### Must Haves for an Admin Portal :

  - A grid form layout of top 6 sold stocks in the market. (no need to add the names of those stocks now, this is just to create the layout).
  - A row to see recent (last 24 hours) orders. (again, only layout, no need for names, it will need APIs).
  - A row to see the urgently needed (to be ordered) stocks.
  - A dropdown to choose which stock to see.

    (Further items will be covered in the future tasks, this is just to create the playground for the final portal).

    _You are free to add more, as you deem appropriate_.

## API Documentation

### Authentication API

#### Endpoint: [`http://167.71.236.10/api/login/`](http://167.71.236.10/api/login/)

##### Method: `POST`

**Description:** Authenticate user credentials and retrieves token.

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin@dsoc24"
}
```
### Handle this token properly in your frontend as it would be required while making other api calls.

### Bonus Tasks

Practice of using HTML, Bootstrap and this time, using Javascript to add more functionality and interactivity to the portal!

- How about a light mode/dark mode on the portal?
- How about adding a ticking time clock? After all, everyone awaits a shift end!
- Use sm, md, lg to ensure responsiveness! (_breakpoints_!)
