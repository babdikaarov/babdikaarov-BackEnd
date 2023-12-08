# Delete

DELETE is the HTTP method verb used to delete resources. Because DELETE routes delete currently existing data, their paths should usually end with a route parameter to indicate which resource to delete.

```js
app.delete('/expressions/:id', (req, res, next) => {
  const removeElement = getIndexById(req.params.id, expressions);
  if(removeElement !== -1){
    const removedElement = expressions.splice(removeElement, 1)
    res.status(204).send(removeElement.id)
  } else {
    res.status(404).send('invalid id')
  }

})
```

Express uses .delete() as its method for DELETE requests.

Servers often send a 204 No Content status code if deletion occurs without error.
