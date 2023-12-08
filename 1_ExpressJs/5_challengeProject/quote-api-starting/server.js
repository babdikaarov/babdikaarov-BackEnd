const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement, filterArrayByString } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);

  res.send({ quote: randomQuote });
});

app.get("/api/quotes", (req, res, next) => {
  const person = req.query.person;
  if (person) {
    const elementToSend = filterArrayByString(quotes, person);
    console.log(elementToSend);
    res.send({ quotes: elementToSend });
  } else {
    res.send({ quotes: quotes });
  }
});

app.post("/api/quotes", (req, res, next) => {
  if (Object.hasOwn(req.query, "quote") || Object.hasOwn(req.query, "person")) {
    const newQuote = req.query;
    quotes.push(newQuote);
    console.log(newQuote);

    res.status(201).send({ quote: newQuote });
  } else {
    res.status(400).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server running in localhost:${PORT}`);
});
