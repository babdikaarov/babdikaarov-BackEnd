# use of express.Route()

Refactor the codebase from `1_routes` module with using express.Router();

## Question

What’s the difference between req.params and req.query?

## Answer

they are both important parts of the request received in our route, let’s remember that the request arrives in our callback function as an object, ie.:

app.get('/', (req,res,next)=>{...});
/*             ^
               |____ this parameter will receive an object argument,
as a matter of fact, req and res are received as objects from
the get method, and next is a function that will allow us to
move to the next request or action.
With that in mind, the request object has been created with key/value pairs of which two are quite important.

One is params: it is an object inside the request object, and it only contains any parameters passed to the route, for example,
from the route: /lor/creatures/:name if we were to make a request /lor/creatures/gollum gollum is the name parameter and so we could find it in the object as: req.params.name which equals to gollum or
 { //req object
  params: {
    name: 'gollum'
  },
...
}
The other is query: it is also an object but it contains only the keys and values related to the query on the request route, for example,
from the route: /lor/creatures/hobbit?familyname=Baggins&home=Shire we get two query parameters, familyname and home and so our object would look like:
{ //req object
  params: {
    name: 'hobbit'
  },
  query: {
    familyname: 'Baggins',
    home: 'Shire'
  }
...
}
this way we can get each as req.query.familyname which is Baggins and req.query.home which is Shire.

Both are closely related but they are not the same at all, params are parameters set for the route, query are values resembling variable assignment that provide extra information on what is being required for the route and it will always start with a ? on the URL, inherently they are both string values that express extrapolates into objects and key/value pairs from the req object.

In the last example we see that the params name contains hobbit and the query has two relevant values, the familyname which is Baggins and the home which is the Shire. since we can use dot notation on those objects to access these values, we can compare and manipulate data with them to send the necessary response.

Something to keep in mind is that we won’t always have values in this two objects but they will always be part of the request object, for example, a request to the root route /, will give us empty objects for both:

req.params // is {}
//and
req.query // is also {}

## Question

Is there an order for how to write a router and use it in app?

## Answer

Most pieces for an express server are interchangeable in order, that is one of the wonderful advantages of that library, but we do want to keep a few things in mind.

We do want to make sure the router has been declared before we set up any requests and before we implement app.use(), ie:
const routesRouter = express.Router();

routesRouter.get('/', (req,res,next) => {...});
... //other methods

app.use('routes', routesRouter);
or

const routesRouter = express.Router();

app.use('routes', routesRouter);

routesRouter.get('/', (req,res,next) => {...});
... //other methods
even if in a different file:

//in routesRouter.js
const express = require('express');

const routesRouter = express.Router();

routesRouter.get('/', (req,res,next) => {...});
... //other methods
module.exports = routesRouter;
Now in app:

...
const routesRouter = require('./routesRouter');

app.use(routesRouter);
...
We also want to make sure we declare it before any request handler, now the handlers can be written before or after app.use() if they are in the same file, but because we need to have the router declared to use it, we cannot start writing our request handlers before we declared the router we will use for them.
Besides that, it is common to also see the router and its handlers to be after all the general set up of the server in app, and just commonly before app.listen() this way we have everything we need to have our server working, the router is created to handle routes, and at last, we open the server to requests with the listen method.
