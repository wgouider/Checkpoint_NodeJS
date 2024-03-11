const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Hello Node!!!!</h1>\n');
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`The server is running on port ${PORT}`);
});
