const express = require("express");

const app = express();

// Express route handlers

app.get("/", (req, res) => {
  res.send("<h4>Pindada, Hello from Express...</h4");
});

app.listen(3000, (err) => console.log("Listening on port 3000"));
