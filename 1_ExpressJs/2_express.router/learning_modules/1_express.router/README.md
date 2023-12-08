# Express.Router

An Express router provides a subset of Express methods. To create an instance of one, we invoke the .Router() method on the top-level Express import.

To use a router, we mount it at a certain path using app.use() and pass in the router as the second argument. This router will now be used for all paths that begin with that path segment. To create a router to handle all requests beginning with /monsters, the code would look like this:

```js
const express = require('express');
const app = express();

const monsters = {
  '1': {
    name: 'godzilla',
    age: 250000000
  },
  '2': {
    name: 'manticore',
    age: 21
  }
}

const monstersRouter = express.Router();

app.use('/monsters', monstersRouter);

monstersRouter.get('/:id', (req, res, next) => {
  const monster = monsters[req.params.id];
  if (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
});
```

Inside the monstersRouter, all matching routes are assumed to have /monsters prepended, as it is mounted at that path. monstersRouter.get('/:id') matches the full path /monsters/:id.

When a GET /monsters/1 request arrives, Express matches /monsters in app.use() because the beginning of the path ('/monsters') matches. Express’ route-matching algorithm enters the monstersRouter‘s routes to search for full path matches. Since monstersRouter.get('/:id) is mounted at /monsters, the two paths together match the entire request path (/monsters/1), so the route matches and the callback is invoked. The 'godzilla' monster is fetched from the monsters object and sent back.

## Question

Are Router() and express() methods interchangeable?

## Answer

I see how they could appear to be so, we commonly use express() defined as app, ie.:

const express = require('express');

const app = express();
and from our same express variable (object) we are getting Router, ie.:

const myNewRoute = express.Router();
Which allows them to perform similar functions for requests and responses, ie.:

app.get('/', (req, res) => console.log(res));
                  /*VS*/
myNewRoute.get('/', (req, res) => console.log(res));
But that is where the line is drawn, both come from the express function, and both perform get, put, post, create, and delete requests.

The main difference is that express() is a top level function, which means it performs core functionality for the library and it contains its own methods where, as a matter of fact, Router is one, and that is why when we create a specific router we chain the Router() method on express, kind of like how we use app.use().

express() handles server connection, routes, middleware, implementation of pages (HTML && CSS to be directed to a route) and communication with databases (like SQL) while our routers only handle routes just like a person on the street would give a tourist directions to where they want to go.

Now, there is a reason why we do not say app.Router() and that is because app becomes the application server if we used app.Router() it would be handling the same routes across the board instead of separating concerns when we write ... = express.Router(); we create like a pocket application, this small version of app that specializes in routes will only know about anything coming to the main path that is assigned in app.use() and that is why it makes it a very helpful practice to separate it, since it will also provide us with an easier way to debug.
