// Import the express library here

const express = require("express");
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method below:
app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
