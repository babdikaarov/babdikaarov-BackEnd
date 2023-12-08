# Introduction: Build a Back-End with Express.js

See what you’ll be learning in the Build a Back-End with Express.js Unit.

The goal of this unit is to learn about how to create back-end servers and APIs in JavaScript using the popular Express.js framework. Learning these tools will enable you to create dynamic server applications that can greatly surpass the capabilities of a static web page.

After this unit, you will be able to:

Create a web server with Express.js
Design/serve RESTful APIs with Express.js
Use Postman to test API routes
Explain what CORS is
Explain Express.js routing and middleware

## Introduction to Server-Side Frameworks with Express.js

Let’s go over server-side frameworks, specifically how Express.js works as a server-side framework.

### What is a Server-Side Framework

Let’s first start with what a framework is — which is a collection of code to make it easier to accomplish a specific task. A framework is particular in that developers must follow the rules and syntax put forth by the framework to use it properly. With that in mind, a server-side framework is used to run web applications and handle web development workflows on the server-side or back-end. This workflow might include things like accessing databases, generating HTML, handling URL routing, and more!

### Why Use a Server-Side Framework?

As you just read, there’s a lot to consider when constructing a back-end. A server-side framework can handle a lot of the back-end responsibilities without you needing to come up with a custom solution, which saves a lot of time. Other benefits could include:

- access to libraries built to work with the framework
- existing resources and documentation for solving common problems
- improved security

There are some tradeoffs to consider as well — as noted earlier, you would need to learn the patterns of the framework. Now let’s look at a specific example of a server-side framework, Express.js.

### Node.js and Express.js

As you recall, Node.js is an open-source runtime environment for executing JavaScript outside of a browser. You can create a back-end entirely with Node.js. However, you can also use Express.js, a server-side framework written in JavaScript and built to work with Node.js. The Express.js framework comes with included code that makes implementing some core functionality much quicker than doing it from scratch. By using Express, you have a simpler developer experience and thus can focus more on business logic (functionality).

Let’s take a look at a code snippet that showcases Express code. The code below sets up a route on a server:

const express = require('express');
const app = express();

```js
app.get('/', (req, res) => {
  res.send('<h1>Hello from your Express.js server!!</h1>');
});
  
app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
```

Which would render load on `localhost:8000`:

Text of "Hello from your Express.js server!!" in the browser as a result of an Express server serving up the root page of a back-end.

With a few lines of code, you can see the simplistic approach Express uses for back-end development. It is also because of Express.js’s minimalist approach and built-in features, Express is one of the most popular frameworks to use with Node. You will see this first-hand as you get to learn the Express framework.
