const express = require("express");
const app = express();

const posts = [
  {
    username: "Kiylo",
    title: "Post 1",
  },
  {
    username: "Anakin",
    title: "Post 2",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000);
