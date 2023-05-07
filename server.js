require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

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

app.get("/posts", authentucateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

function authentucateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(3000);
