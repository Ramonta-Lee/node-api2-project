const express = require("express");

const server = express();

server.use(express.json()); // needed to parse JSON from the body

server.get("/api/posts", (req, res) => {
  res.send(`<h2>Welcome to Post Comments `);
});

const port = 8000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
