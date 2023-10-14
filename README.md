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

* server.js
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

* server.js
       ├──
       // 9- Required workouts from Routes
       //10- middleware (express.json())
                                    ├──
                                    //for the POST and PATCH request we are sending data to the server to add a new data. we can access it with 'req' object but we can only access if we use a bit of middleware in express app and i.e express.json()
                                    // so any request that comes in , it looks for the body to the request some data we are sending to the server and if it does , then it patches it or attaches it to request object 'req'. so that we can access it in the request handler.

        // 4- Routes
        app.use('/api/workouts',workoutRoutes);




# MONGO DB Atlas & MOngoose

**mongoose** :- It is an ODM(object data modelling library) that allows us to use METHODS to read & write Database. It also helps in Declaring Models & Schemas.

install mongoose
create a new mongoDB cluster
set the credenrtials and put them in .env file

require mongoose in server.js

* server.js
        ├──
        // 11- Connect To Db
        mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            //3-  Listen for request
            app.listen(process.env.PORT, () => {
            console.log(`Listening on PORT: ${process.env.PORT} - Connected to DB`);
            });
        })
        .catch((error) => {
            console.log(`Error connecting to MongoDb ${error}`);
        });



## Models & Schemas

In the context of Mongoose, a popular Object Data Modeling (ODM) library for MongoDB in Node.js, a schema and a model play distinct roles in defining and working with data structures in a MongoDB database. Here's an explanation of both concepts with examples:

# Schema:
A schema in Mongoose defines the structure and attributes of a document (a record) that you want to store in a MongoDB collection. It specifies the fields or properties that a document can have, along with their data types and validation rules. Essentially, it acts as a blueprint for the shape of your data.

# Model:
A model, on the other hand, is a constructor function provided by Mongoose that allows you to interact with a MongoDB collection based on a specific schema. It represents a specific collection in the database and provides methods for querying, creating, updating, and deleting documents in that collection.


**Example** 

                    const mongoose = require('mongoose');

                    const userSchema = new mongoose.Schema({
                    username: {
                        type: String,
                        required: true,
                    },
                    email: {
                        type: String,
                        required: true,
                        unique: true,
                    },
                    age: Number,
                    });

                    // Create a User model based on the schema
                    const User = mongoose.model('User', userSchema);


        Now, you can use the User model to perform various operations on the "users" collection in your MongoDB database. For instance, you can create a new User document and save it to the database:

                            const newUser = new User({
                            username: 'john_doe',
                            email: 'john@example.com',
                            age: 30,
                            });

                            newUser.save()
                            .then((user) => {
                                console.log('User saved:', user);
                            })
                            .catch((error) => {
                                console.error('Error saving user:', error);
                            });

        In this code, the User model is used to create a new User document (newUser) and save it to the MongoDB "users" collection


**Summary**
a schema defines the structure and validation rules for documents, while a model is a construct that allows you to interact with the MongoDB collection based on that schema. The model provides methods for CRUD (Create, Read, Update, Delete) operations on documents within the collection.





**Collection in MongoDB**:
In MongoDB, a collection is a container for a group of related documents. MongoDB is a document-oriented NoSQL database, which means it stores data in a format similar to JSON, known as BSON (Binary JSON). Each document in MongoDB represents a single record, and collections are used to organize and store these documents. Think of a collection as being analogous to a table in a relational database, but with a few key differences:

1. **Schema-less**: Unlike relational databases where tables have a fixed schema with predefined columns, collections in MongoDB are schema-less. Documents within the same collection can have different structures. This flexibility makes it easy to adapt to changing data requirements.

2. **Documents**: The individual records within a collection are called documents. Each document is a BSON object, which can have its own set of fields and data types. This allows for a high degree of flexibility and the ability to store complex and heterogeneous data.

3. **No Fixed Relationships**: In a relational database, you often establish relationships between tables using keys, while in MongoDB, relationships are not established through table joins but are often embedded or referenced within documents.

Here's a simple example of a MongoDB collection for a "users" collection:


                        // Example MongoDB collection named "users"
                        {
                        _id: ObjectId("5fe1f29f8e765d7f22d6c7e3"),
                        username: "john_doe",
                        email: "john@example.com",
                        age: 30,
                        }

                        {
                        _id: ObjectId("5fe1f29f8e765d7f22d6c7e4"),
                        username: "jane_smith",
                        email: "jane@example.com",
                        age: 25,
                        address: {
                            street: "123 Main St",
                            city: "Anytown",
                            state: "CA",
                        }
                        }
                        

In this example, the "users" collection contains two documents, each with its own set of fields. The first document has basic user information, while the second document includes an embedded "address" object.

Collections in MongoDB are used to organize related data, and they are particularly useful when dealing with semi-structured or rapidly evolving data. Unlike relational databases, MongoDB allows you to adapt to changing data requirements without the need to modify the schema, which can be advantageous in certain use cases.