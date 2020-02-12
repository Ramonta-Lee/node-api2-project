const express = require("express");

const hubsRouter = require("./hubs/hubs-router");

const server = express();

server.use(express.json()); // needed to parse JSON from the body

// for URLs beginning with /api/posts
server.use("/api/posts", hubsRouter);

server.get("/api/posts", (req, res) => {
  res.send(`<h2>Welcome to Post Comments `);
});

const port = 8000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
