const express = require("express");
const app = express();

const Port = process.env.Port || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Starting app.js");
});

app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
