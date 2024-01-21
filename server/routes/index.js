var express = require('express');
var router = express.Router();
const Books = require("../models/Books");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route for users to save books to database
router.post("/api/book", async (req, res) => {
  if (req.body) {
    let newBook = new Books({name: req.body.name, author: req.body.author, pages: req.body.pages});
    await newBook.save(); 
    res.sendStatus(200);
  } else {
    res.send("No book to add!")
  }
})

router.get("/book/:book", (req, res) => {
  //Finding this book from the database!
  console.log(req.params.book);
})

module.exports = router;
