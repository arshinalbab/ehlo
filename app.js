const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const message = "Hello, this is the EHLO server!";
  res.json({ echo: message });
});

app.post("/ehlo", (req, res) => {
  const message = req.body.message;
  res.json({ echo: message });
});

app.listen(port, () => {
  console.log(`Echo server listening at http://localhost:${port}`);
});
