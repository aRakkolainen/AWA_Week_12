var express = require('express');
var router = express.Router();
const Books = require("../models/Books");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route for users to save books to database
router.post("/api/book", async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let newBook = new Books({name: req.body.name, author: req.body.author, pages: req.body.pages});
    await newBook.save(); 
    res.sendStatus(200);
  } else {
    res.send("No book to add!")
  }
})

router.get("/:book", async (req, res) => {
  //Finding this book from the database!
  console.log(req.params.book);
  let book = await Books.findOne({name: req.params.book}).exec(); 
  if (book) {
    let data = {
      name: book.name, 
      author: book.author, 
      pages: book.pages
    }
    console.log("Book found!")
    console.log(data);
    res.send({message: data});
  }
  else {
    console.log("BOOK NOT FOUND!")
    res.send({message: "404 Not found!"});
  }
})

module.exports = router;
