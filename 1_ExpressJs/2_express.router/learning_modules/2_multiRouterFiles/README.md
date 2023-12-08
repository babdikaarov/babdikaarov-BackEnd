# Using Multiple Router Files

Generally, we will keep each router in its own file, and require them in the main application. This allows us to keep our code clean and our files short.

To do this with monstersRouter, we would create a new file monsters.js and move all code related to /monsters requests into it.

```js
// monsters.js
const express = require('express');
const monstersRouter = express.Router();

const monsters = {
  '1': {
    name: 'godzilla',
    age: 250000000
  },
  '2': {
    Name: 'manticore',
    age: 21
  }
}

monstersRouter.get('/:id', (req, res, next) => {
  const monster = monsters[req.params.id];
  if (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
});

module.exports = monstersRouter;
```

This code contains all the monsters specific code. In a more full-fledged API, this file would contain multiple routes. To use this router in another file, we use module.exports so that other files can access monstersRouter. The only other new line of code required is that Express must be required in each file, since we’ll need to create a router with express.Router().

Our main.js file could then be refactored to import the monstersRouter:

```js
// main.js
const express = require('express');
const app = express();
const monstersRouter = require('./monsters.js');

app.use('/monsters', monstersRouter);
```

In this example, the monstersRouter is required in main.js from monsters.js and used exactly as it was before.

## Question

Are there naming conventions on router files?

## Answer

Nothing required, like many other things in Express, route files are flexible, but in terms of community, there has been a certain agreement on naming conventions, to pair the file name with the route, and some places do ask to write the word route as part of the name. ie monsterRoutes.js but again, most commonly we can see simply monsters.js related to the /monsters route. Another thing to have in mind is that having a router.js file that handles all the route connections is also common, for example the following file map:
`
mainApplicationDirectory/
|
|
|
__app.js
__ router.js
|
|
__routes/
        |
        |
         __ monsters.js
         __animals.js
         __ fruits.js
 `
We can see that now we could also have a directory of routes where each route handler file exists and are connected to our app through a main router.js file. This sort of system is commonly seen when there is a hight complexity in our routes that is better to have a middleware to handle routes instead of implementing app.use('/route', routeHandler) inside of app.
