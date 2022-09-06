const express = require("express");
const app = express();
const port = 3000;
let Movies = [];
let globlalAddMovie = null;

app.get("/", (req, res) => {
  const date = new Date();
  let name = "Dan Rothwell";
  res.send(name+" "+date);
});

app.get("/list-movies", (req, res) => {
  let avengers = ["avengers"];
  let LOTR = ["LOTR"];
  Movies.push(avengers, LOTR);
  let movieList = Movies.join(" ");

  res.send(movieList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/add-movie", (req, res) => {
  const localAddMovie = req.query.addMovie;
  for (let i = 0; i < localAddMovie.length; i++) {
    if (localAddMovie[i] === "+") {
      localAddMovie[i].replace(" ");
    }
   
  }
  globlalAddMovie = localAddMovie;
  Movies.push(globlalAddMovie);
  
  
  res.send(Movies);
});

app.get("/list-movies", (req, res) => {
  res.send(Movies);
});
