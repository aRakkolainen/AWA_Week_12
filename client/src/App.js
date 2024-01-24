//import logo from './logo.svg';
//import {useState, useEffect} from "react";
// Creating form with post request in React is based on this tutorial: https://medium.com/@64rohanmalo/make-post-request-in-react-66b7e458ca1f
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookData from "./components/BookData";
//import BookItem from "./components/BookItem";
import './App.css';

function App() {
  //const [bookData, setBookData] = useState({});
    /*const handleChange = (e) => {
        setBookData(...bookData,[e.target.name], e.target.value)
    }*/
    // Fetching the data from database!
    /*useEffect(() => {
      fetch("/book/:book")
      .then(response => response.json())
      .then(json => setBookData(json));
    })*/

  return (
    <Router>
    <div className="App">
      <h1>Books</h1>
      <Routes>
      <Route path="/" element={<><form action="/api/book" method="POST">
        <input id="name" name="name" type="string" placeholder="Name for the book.."></input>
        <br></br>
        <input id="author" name="author" type="string" placeholder="Name for the author.."></input>
        <br></br>
        <input id="pages" name="pages" type="number" placeholder="Number of pages in the book"></input>
        <br></br>
        <input id="submit" type="submit" value="Submit"></input>
        </form> 
    </>}>

    </Route>
      <Route path="/book/:book" element={<BookData />}></Route>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
