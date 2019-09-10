const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;

app.use("/", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}.............`);
});
