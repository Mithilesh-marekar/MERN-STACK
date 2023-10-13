## LEARNING MERN STACK

A MERN stack is a popular web development framework that combines four key technologies: MongoDB, Express.js, React, and Node.js. This stack is designed for building full-stack web applications, with each component serving a specific role. Here's a high-level overview of how a MERN app works:

1. **MongoDB**: MongoDB is a NoSQL database that stores your application's data. It's designed to handle unstructured or semi-structured data, making it a flexible choice for web applications. You define data models in the form of JSON-like documents (BSON) and store them in collections. MongoDB is used to handle all data-related operations, such as storing, retrieving, and updating data.

2. **Express.js**: Express.js is a minimal and flexible Node.js web application framework that simplifies building the server-side part of your application. It provides a set of robust features for web and mobile applications, including routing, middleware, and request handling. With Express, you can create RESTful APIs and define the endpoints for your application.

3. **React**: React is a JavaScript library for building user interfaces. It allows you to create reusable UI components that efficiently update when the underlying data changes. React handles the client-side rendering and interaction of your application, offering a responsive and dynamic user experience. React applications are typically single-page applications (SPAs) that load a single HTML page and update the content dynamically without full page reloads.

4. **Node.js**: Node.js is a runtime environment that allows you to run JavaScript on the server-side. In a MERN stack, Node.js is used to set up the server that handles HTTP requests, communicates with the database, and serves the React application to the client's browser. It uses Express.js for defining routes and handling requests.

Here's the typical flow of a MERN application:

1. A user interacts with the React front-end, which makes API requests to the Node.js server using HTTP requests (e.g., GET, POST, PUT, DELETE).

2. The Node.js server, built with Express, receives these HTTP requests and processes them. It may involve interacting with the MongoDB database to retrieve or modify data.

3. The server sends responses back to the React front-end, often in JSON format.

4. React processes the data from the server and updates the user interface as necessary, providing a dynamic and responsive user experience.

5. This process repeats as users interact with the application, creating a seamless and interactive user experience.

In summary, a MERN app works by utilizing MongoDB for data storage, Express.js for handling HTTP requests and defining APIs, React for building a dynamic user interface, and Node.js for serving the application, managing server-side logic, and facilitating communication between the client and the database. This stack is known for its ability to create powerful, real-time web applications with a unified JavaScript ecosystem from front-end to back-end.

# STEPS

install node
install postman

APP(folder)
├── BACKEND (folder)
│ ├── server.js (file) //entry point of our application

Create :- package.json (npm init)
install express
install nodemon
install dotenv

\*server.js
         ├── // Require dotenv
         require('dotenv').config();
        //1- Required Express
        const express = require('express');

        //2-  Creates an express APP
        const app = express();


        //3-  Listen for request
        app.listen(process.env.PORT, () => {
            console.log(`Listening on PORT: ${process.env.PORT}`)
        })

        // 4- Routes
        app.get('/', (req, res) => {
        // res.send("Hello World"); //3- Sends a response to the client
            res.json({msg:'Hello World'}) //3- Sends a response to the client
        })


        // 5- middleware
        app.use((req, res, next) => {
            console.log("Middleware")
            next() //moves on to the next piece of Middleware after its completed.
            })



# Express Router and API routes.
* Create another folder called ROUTES in your backend directory. This will be where all of you api route files live. Inside this new file

//Require router from express module
//const express = require('express');
//add request handlers
//exported router

APP(folder)
├── BACKEND (folder)
│ ├── routes (folder)
│ │ └── workouts.js


*workouts.js
         ├──
            require Express
            Add request Handlers
                    ├── GET    /workouts      -> Get's all workout Documents
                    ├──POST    /workouts      -> Get's all workout Documents
                    ├──GET     /workouts/:id  -> Get's a single workout Document
                    ├──DELETE  /workouts/:id  -> Deletes a workout 
                    ├──PATCH   /workouts/:id  -> Updates a workout \

            Exportes router

*server.js
       ├──
       // 9- Required workouts from Routes
       //10- middleware (express.json())
                                    ├──
                                    //for the POST and PATCH request we are sending data to the server to add a new data. we can access it with 'req' object but we can only access if we use a bit of middleware in express app and i.e express.json()
                                    // so any request that comes in , it looks for the body to the request some data we are sending to the server and if it does , then it patches it or attaches it to request object 'req'. so that we can access it in the request handler.

        // 4- Routes
        app.use('/api/workouts',workoutRoutes);